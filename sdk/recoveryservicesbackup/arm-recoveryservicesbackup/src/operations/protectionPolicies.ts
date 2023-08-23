/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { ProtectionPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClient } from "../recoveryServicesBackupClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ProtectionPoliciesGetOptionalParams,
  ProtectionPoliciesGetResponse,
  ProtectionPolicyResource,
  ProtectionPoliciesCreateOrUpdateOptionalParams,
  ProtectionPoliciesCreateOrUpdateResponse,
  ProtectionPoliciesDeleteOptionalParams
} from "../models";

/** Class containing ProtectionPolicies operations. */
export class ProtectionPoliciesImpl implements ProtectionPolicies {
  private readonly client: RecoveryServicesBackupClient;

  /**
   * Initialize a new instance of the class ProtectionPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: RecoveryServicesBackupClient) {
    this.client = client;
  }

  /**
   * Provides the details of the backup policies associated to Recovery Services Vault. This is an
   * asynchronous
   * operation. Status of the operation can be fetched using GetPolicyOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param policyName Backup policy information to be fetched.
   * @param options The options parameters.
   */
  get(
    vaultName: string,
    resourceGroupName: string,
    policyName: string,
    options?: ProtectionPoliciesGetOptionalParams
  ): Promise<ProtectionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, policyName, options },
      getOperationSpec
    );
  }

  /**
   * Creates or modifies a backup policy. This is an asynchronous operation. Status of the operation can
   * be fetched
   * using GetPolicyOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param policyName Backup policy to be created.
   * @param parameters resource backup policy
   * @param options The options parameters.
   */
  createOrUpdate(
    vaultName: string,
    resourceGroupName: string,
    policyName: string,
    parameters: ProtectionPolicyResource,
    options?: ProtectionPoliciesCreateOrUpdateOptionalParams
  ): Promise<ProtectionPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { vaultName, resourceGroupName, policyName, parameters, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes specified backup policy from your Recovery Services Vault. This is an asynchronous
   * operation. Status of the
   * operation can be fetched using GetProtectionPolicyOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param policyName Backup policy to be deleted.
   * @param options The options parameters.
   */
  async beginDelete(
    vaultName: string,
    resourceGroupName: string,
    policyName: string,
    options?: ProtectionPoliciesDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { vaultName, resourceGroupName, policyName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes specified backup policy from your Recovery Services Vault. This is an asynchronous
   * operation. Status of the
   * operation can be fetched using GetProtectionPolicyOperationResult API.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   *                          present.
   * @param policyName Backup policy to be deleted.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    vaultName: string,
    resourceGroupName: string,
    policyName: string,
    options?: ProtectionPoliciesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      vaultName,
      resourceGroupName,
      policyName,
      options
    );
    return poller.pollUntilDone();
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionPolicyResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.policyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionPolicyResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.parameters13,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.policyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupPolicies/{policyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.policyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
