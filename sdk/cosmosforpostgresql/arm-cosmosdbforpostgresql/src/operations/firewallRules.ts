/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { FirewallRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { CosmosDBForPostgreSQL } from "../cosmosDBForPostgreSQL";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  FirewallRule,
  FirewallRulesListByClusterOptionalParams,
  FirewallRulesListByClusterResponse,
  FirewallRulesCreateOrUpdateOptionalParams,
  FirewallRulesCreateOrUpdateResponse,
  FirewallRulesDeleteOptionalParams,
  FirewallRulesDeleteResponse,
  FirewallRulesGetOptionalParams,
  FirewallRulesGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing FirewallRules operations. */
export class FirewallRulesImpl implements FirewallRules {
  private readonly client: CosmosDBForPostgreSQL;

  /**
   * Initialize a new instance of the class FirewallRules class.
   * @param client Reference to the service client
   */
  constructor(client: CosmosDBForPostgreSQL) {
    this.client = client;
  }

  /**
   * Lists all the firewall rules on cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  public listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: FirewallRulesListByClusterOptionalParams
  ): PagedAsyncIterableIterator<FirewallRule> {
    const iter = this.listByClusterPagingAll(
      resourceGroupName,
      clusterName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.listByClusterPagingPage(
          resourceGroupName,
          clusterName,
          options,
          settings
        );
      }
    };
  }

  private async *listByClusterPagingPage(
    resourceGroupName: string,
    clusterName: string,
    options?: FirewallRulesListByClusterOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<FirewallRule[]> {
    let result: FirewallRulesListByClusterResponse;
    result = await this._listByCluster(resourceGroupName, clusterName, options);
    yield result.value || [];
  }

  private async *listByClusterPagingAll(
    resourceGroupName: string,
    clusterName: string,
    options?: FirewallRulesListByClusterOptionalParams
  ): AsyncIterableIterator<FirewallRule> {
    for await (const page of this.listByClusterPagingPage(
      resourceGroupName,
      clusterName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a new cluster firewall rule or updates an existing cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    parameters: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<FirewallRulesCreateOrUpdateResponse>,
      FirewallRulesCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FirewallRulesCreateOrUpdateResponse> => {
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
      args: {
        resourceGroupName,
        clusterName,
        firewallRuleName,
        parameters,
        options
      },
      spec: createOrUpdateOperationSpec
    });
    const poller = await createHttpPoller<
      FirewallRulesCreateOrUpdateResponse,
      OperationState<FirewallRulesCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a new cluster firewall rule or updates an existing cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param parameters The required parameters for creating or updating a firewall rule.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    parameters: FirewallRule,
    options?: FirewallRulesCreateOrUpdateOptionalParams
  ): Promise<FirewallRulesCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      clusterName,
      firewallRuleName,
      parameters,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<FirewallRulesDeleteResponse>,
      FirewallRulesDeleteResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<FirewallRulesDeleteResponse> => {
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
      args: { resourceGroupName, clusterName, firewallRuleName, options },
      spec: deleteOperationSpec
    });
    const poller = await createHttpPoller<
      FirewallRulesDeleteResponse,
      OperationState<FirewallRulesDeleteResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location"
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes a cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesDeleteOptionalParams
  ): Promise<FirewallRulesDeleteResponse> {
    const poller = await this.beginDelete(
      resourceGroupName,
      clusterName,
      firewallRuleName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Gets information about a cluster firewall rule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param firewallRuleName The name of the cluster firewall rule.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    clusterName: string,
    firewallRuleName: string,
    options?: FirewallRulesGetOptionalParams
  ): Promise<FirewallRulesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, firewallRuleName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all the firewall rules on cluster.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param clusterName The name of the cluster.
   * @param options The options parameters.
   */
  private _listByCluster(
    resourceGroupName: string,
    clusterName: string,
    options?: FirewallRulesListByClusterOptionalParams
  ): Promise<FirewallRulesListByClusterResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, clusterName, options },
      listByClusterOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/firewallRules/{firewallRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRule
    },
    201: {
      bodyMapper: Mappers.FirewallRule
    },
    202: {
      bodyMapper: Mappers.FirewallRule
    },
    204: {
      bodyMapper: Mappers.FirewallRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.parameters3,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.firewallRuleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/firewallRules/{firewallRuleName}",
  httpMethod: "DELETE",
  responses: {
    200: {
      headersMapper: Mappers.FirewallRulesDeleteHeaders
    },
    201: {
      headersMapper: Mappers.FirewallRulesDeleteHeaders
    },
    202: {
      headersMapper: Mappers.FirewallRulesDeleteHeaders
    },
    204: {
      headersMapper: Mappers.FirewallRulesDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.firewallRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/firewallRules/{firewallRuleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRule
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName,
    Parameters.firewallRuleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByClusterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/{clusterName}/firewallRules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FirewallRuleListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.clusterName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
