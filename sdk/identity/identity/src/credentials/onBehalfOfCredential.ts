// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { AccessToken, GetTokenOptions, TokenCredential } from "@azure/core-auth";
import {
  OnBehalfOfCredentialCertificateOptions,
  OnBehalfOfCredentialOptions,
  OnBehalfOfCredentialSecretOptions,
} from "./onBehalfOfCredentialOptions";
import {
  processMultiTenantRequest,
  resolveAdditionallyAllowedTenantIds,
} from "../util/tenantIdUtils";
import { CredentialPersistenceOptions } from "./credentialPersistenceOptions";
import { MultiTenantTokenCredentialOptions } from "./multiTenantTokenCredentialOptions";
import { credentialLogger, formatError } from "../util/logging";
import { ensureScopes } from "../util/scopeUtils";
import { tracingClient } from "../util/tracing";
import { MsalClient, createMsalClient } from "../msal/nodeFlows/msalClient";
import { CertificateParts } from "../msal/types";
import { ClientCertificatePEMCertificatePath } from "./clientCertificateCredential";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";

const credentialName = "OnBehalfOfCredential";
const logger = credentialLogger(credentialName);

/**
 * Enables authentication to Microsoft Entra ID using the [On Behalf Of flow](https://learn.microsoft.com/entra/identity-platform/v2-oauth2-on-behalf-of-flow).
 */
export class OnBehalfOfCredential implements TokenCredential {
  private tenantId: string;
  private additionallyAllowedTenantIds: string[];
  private msalClient: MsalClient;
  private sendCertificateChain?: boolean;
  private certificatePath?: string;
  private clientSecret?: string;
  private userAssertionToken: string;

  /**
   * Creates an instance of the {@link OnBehalfOfCredential} with the details
   * needed to authenticate against Microsoft Entra ID with path to a PEM certificate,
   * and an user assertion.
   *
   * Example using the `KeyClient` from [\@azure/keyvault-keys](https://www.npmjs.com/package/\@azure/keyvault-keys):
   *
   * ```ts
   * const tokenCredential = new OnBehalfOfCredential({
   *   tenantId,
   *   clientId,
   *   certificatePath: "/path/to/certificate.pem",
   *   userAssertionToken: "access-token"
   * });
   * const client = new KeyClient("vault-url", tokenCredential);
   *
   * await client.getKey("key-name");
   * ```
   *
   * @param options - Optional parameters, generally common across credentials.
   */
  constructor(
    options: OnBehalfOfCredentialCertificateOptions &
      MultiTenantTokenCredentialOptions &
      CredentialPersistenceOptions,
  );
  /**
   * Creates an instance of the {@link OnBehalfOfCredential} with the details
   * needed to authenticate against Microsoft Entra ID with a client
   * secret and an user assertion.
   *
   * Example using the `KeyClient` from [\@azure/keyvault-keys](https://www.npmjs.com/package/\@azure/keyvault-keys):
   *
   * ```ts
   * const tokenCredential = new OnBehalfOfCredential({
   *   tenantId,
   *   clientId,
   *   clientSecret,
   *   userAssertionToken: "access-token"
   * });
   * const client = new KeyClient("vault-url", tokenCredential);
   *
   * await client.getKey("key-name");
   * ```
   *
   * @param options - Optional parameters, generally common across credentials.
   */
  constructor(
    options: OnBehalfOfCredentialSecretOptions &
      MultiTenantTokenCredentialOptions &
      CredentialPersistenceOptions,
  );

  constructor(options: OnBehalfOfCredentialOptions) {
    const { clientSecret } = options as OnBehalfOfCredentialSecretOptions;
    const { certificatePath, sendCertificateChain } =
      options as OnBehalfOfCredentialCertificateOptions;
    const {
      tenantId,
      clientId,
      userAssertionToken,
      additionallyAllowedTenants: additionallyAllowedTenantIds,
    } = options;
    if (!tenantId || !clientId || !(clientSecret || certificatePath) || !userAssertionToken) {
      throw new Error(
        `${credentialName}: tenantId, clientId, clientSecret (or certificatePath) and userAssertionToken are required parameters.`,
      );
    }
    this.certificatePath = certificatePath;
    this.clientSecret = clientSecret;
    this.userAssertionToken = userAssertionToken;
    this.sendCertificateChain = sendCertificateChain;

    this.tenantId = tenantId;
    this.additionallyAllowedTenantIds = resolveAdditionallyAllowedTenantIds(
      additionallyAllowedTenantIds,
    );

    this.msalClient = createMsalClient(clientId, this.tenantId, {
      ...options,
      logger,
      tokenCredentialOptions: options,
    });
  }

  /**
   * Authenticates with Microsoft Entra ID and returns an access token if successful.
   * If authentication fails, a {@link CredentialUnavailableError} will be thrown with the details of the failure.
   *
   * @param scopes - The list of scopes for which the token will have access.
   * @param options - The options used to configure the underlying network requests.
   */
  async getToken(scopes: string | string[], options: GetTokenOptions = {}): Promise<AccessToken> {
    return tracingClient.withSpan(`${credentialName}.getToken`, options, async (newOptions) => {
      newOptions.tenantId = processMultiTenantRequest(
        this.tenantId,
        newOptions,
        this.additionallyAllowedTenantIds,
        logger,
      );

      const arrayScopes = ensureScopes(scopes);
      if (this.certificatePath) {
        const clientCertificate = await this.buildClientCertificate(this.certificatePath);

        return this.msalClient.getTokenOnBehalfOf(
          arrayScopes,
          this.userAssertionToken,
          clientCertificate,
          newOptions,
        );
      } else if (this.clientSecret) {
        return this.msalClient.getTokenOnBehalfOf(
          arrayScopes,
          this.userAssertionToken,
          this.clientSecret,
          options,
        );
      } else {
        // this is a bug, as the constructor should have thrown an error if neither clientSecret nor certificatePath were provided
        throw new Error("Expected either clientSecret or certificatePath to be defined.");
      }
    });
  }

  private async buildClientCertificate(certificatePath: string): Promise<CertificateParts> {
    try {
      const parts = await this.parseCertificate({ certificatePath }, this.sendCertificateChain);
      return {
        thumbprint: parts.thumbprint,
        privateKey: parts.certificateContents,
        x5c: parts.x5c,
      };
    } catch (error: any) {
      logger.info(formatError("", error));
      throw error;
    }
  }

  private async parseCertificate(
    configuration: ClientCertificatePEMCertificatePath,
    sendCertificateChain?: boolean,
  ): Promise<Omit<CertificateParts, "privateKey"> & { certificateContents: string }> {
    const certificatePath = configuration.certificatePath;
    const certificateContents = await readFile(certificatePath, "utf8");
    const x5c = sendCertificateChain ? certificateContents : undefined;

    const certificatePattern =
      /(-+BEGIN CERTIFICATE-+)(\n\r?|\r\n?)([A-Za-z0-9+/\n\r]+=*)(\n\r?|\r\n?)(-+END CERTIFICATE-+)/g;
    const publicKeys: string[] = [];

    // Match all possible certificates, in the order they are in the file. These will form the chain that is used for x5c
    let match;
    do {
      match = certificatePattern.exec(certificateContents);
      if (match) {
        publicKeys.push(match[3]);
      }
    } while (match);

    if (publicKeys.length === 0) {
      throw new Error("The file at the specified path does not contain a PEM-encoded certificate.");
    }

    const thumbprint = createHash("sha1")
      .update(Buffer.from(publicKeys[0], "base64"))
      .digest("hex")
      .toUpperCase();

    return {
      certificateContents,
      thumbprint,
      x5c,
    };
  }
}
