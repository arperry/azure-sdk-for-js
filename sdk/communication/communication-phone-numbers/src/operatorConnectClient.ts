// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
/// <reference lib="esnext.asynciterable" />

import {
  createCommunicationAuthPolicy,
  isKeyCredential,
  parseClientArguments,
} from "@azure/communication-common";
import { KeyCredential, TokenCredential, isTokenCredential } from "@azure/core-auth";
import { InternalPipelineOptions } from "@azure/core-rest-pipeline";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SpanStatusCode } from "@azure/core-tracing";
import { CommonClientOptions } from "@azure/core-client";

import { createSpan, logger } from "./utils";
import { createPhoneNumbersPagingPolicy } from "./utils/customPipelinePolicies";

import { OperatorConnectClient as OperatorConnectGeneratedClient } from "./generated/src/operatorConnect";
import {
  Operator,
  GetOperatorsOptionalParams
} from "./generated/src/operatorConnect/models/";

/**
 * Client options used to configure the OperatorConnectClient API requests.
 */
export interface OperatorConnectClientOptions extends CommonClientOptions { }

const isOperatorConnectClientOptions = (options: any): options is OperatorConnectClientOptions =>
  options && !isKeyCredential(options) && !isTokenCredential(options);

/**
 * Client class for interacting with Azure Communication Services Operator Connect service.
 */
export class OperatorConnectClient {
  /**
     * A reference to the auto-generated OperatorConnect HTTP client.
     */
  private readonly client: OperatorConnectGeneratedClient;

  /**
   * Initializes a new instance of the OperatorConnectClient class using a connection string.
   *
   * @param connectionString - Connection string to connect to an Azure Communication Service resource. (eg: endpoint=https://contoso.eastus.communications.azure.net/;accesskey=secret)
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  public constructor(connectionString: string, options?: OperatorConnectClientOptions);

  /**
   * Initializes a new instance of the OperatorConnectClient class using an Azure KeyCredential.
   *
   * @param url - The endpoint of the service (eg: https://contoso.eastus.communications.azure.net)
   * @param credential - An object that is used to authenticate requests to the service. Use the Azure KeyCredential or `@azure/identity` to create a credential.
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  public constructor(url: string, credential: KeyCredential, options?: OperatorConnectClientOptions);

  /**
   * Initializes a new instance of the OperatorConnectClient class using a TokenCredential.
   * @param url - The endpoint of the service (ex: https://contoso.eastus.communications.azure.net).
   * @param credential - TokenCredential that is used to authenticate requests to the service.
   * @param options - Optional. Options to configure the HTTP pipeline.
   */
  public constructor(url: string, credential: TokenCredential, options?: OperatorConnectClientOptions);

  public constructor(
    connectionStringOrUrl: string,
    credentialOrOptions?: KeyCredential | TokenCredential | OperatorConnectClientOptions,
    maybeOptions: OperatorConnectClientOptions = {}
  ) {
    const { url, credential } = parseClientArguments(connectionStringOrUrl, credentialOrOptions);
    const options = isOperatorConnectClientOptions(credentialOrOptions)
      ? credentialOrOptions
      : maybeOptions;

    const internalPipelineOptions: InternalPipelineOptions = {
      ...options,
      ...{
        loggingOptions: {
          logger: logger.info,
        },
      },
    };

    this.client = new OperatorConnectGeneratedClient(url, {
      endpoint: url,
      ...internalPipelineOptions,
    });
    const authPolicy = createCommunicationAuthPolicy(credential);
    this.client.pipeline.addPolicy(authPolicy);

    // This policy is temporary workarounds to address compatibility issues with Azure Core V2.
    const phoneNumbersPagingPolicy = createPhoneNumbersPagingPolicy(url);
    this.client.pipeline.addPolicy(phoneNumbersPagingPolicy);
  }

  /**
   * Iterates all available operators.
   *
   * @param options - Additional request options.
   */
  public listOperators(
    options: GetOperatorsOptionalParams = {}
  ): PagedAsyncIterableIterator<Operator> {
    const { span, updatedOptions } = createSpan(
      "OperatorConnectClient-listOperators",
      options
    );
    const iter = this.client.listOperators(updatedOptions);
    span.end();
    return iter;
  }
}
