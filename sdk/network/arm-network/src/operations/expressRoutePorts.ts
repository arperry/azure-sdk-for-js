/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ExpressRoutePorts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  SimplePollerLike,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import { createLroSpec } from "../lroImpl";
import {
  ExpressRoutePort,
  ExpressRoutePortsListByResourceGroupNextOptionalParams,
  ExpressRoutePortsListByResourceGroupOptionalParams,
  ExpressRoutePortsListByResourceGroupResponse,
  ExpressRoutePortsListNextOptionalParams,
  ExpressRoutePortsListOptionalParams,
  ExpressRoutePortsListResponse,
  ExpressRoutePortsDeleteOptionalParams,
  ExpressRoutePortsGetOptionalParams,
  ExpressRoutePortsGetResponse,
  ExpressRoutePortsCreateOrUpdateOptionalParams,
  ExpressRoutePortsCreateOrUpdateResponse,
  TagsObject,
  ExpressRoutePortsUpdateTagsOptionalParams,
  ExpressRoutePortsUpdateTagsResponse,
  GenerateExpressRoutePortsLOARequest,
  ExpressRoutePortsGenerateLOAOptionalParams,
  ExpressRoutePortsGenerateLOAResponse,
  ExpressRoutePortsListByResourceGroupNextResponse,
  ExpressRoutePortsListNextResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ExpressRoutePorts operations. */
export class ExpressRoutePortsImpl implements ExpressRoutePorts {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class ExpressRoutePorts class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * List all the ExpressRoutePort resources in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: ExpressRoutePortsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ExpressRoutePort> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
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
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings,
        );
      },
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: ExpressRoutePortsListByResourceGroupOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ExpressRoutePort[]> {
    let result: ExpressRoutePortsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options,
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: ExpressRoutePortsListByResourceGroupOptionalParams,
  ): AsyncIterableIterator<ExpressRoutePort> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options,
    )) {
      yield* page;
    }
  }

  /**
   * List all the ExpressRoutePort resources in the specified subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ExpressRoutePortsListOptionalParams,
  ): PagedAsyncIterableIterator<ExpressRoutePort> {
    const iter = this.listPagingAll(options);
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
        return this.listPagingPage(options, settings);
      },
    };
  }

  private async *listPagingPage(
    options?: ExpressRoutePortsListOptionalParams,
    settings?: PageSettings,
  ): AsyncIterableIterator<ExpressRoutePort[]> {
    let result: ExpressRoutePortsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ExpressRoutePortsListOptionalParams,
  ): AsyncIterableIterator<ExpressRoutePort> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Deletes the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    expressRoutePortName: string,
    options?: ExpressRoutePortsDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, expressRoutePortName, options },
      spec: deleteOperationSpec,
    });
    const poller = await createHttpPoller<void, OperationState<void>>(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "location",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Deletes the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    expressRoutePortName: string,
    options?: ExpressRoutePortsDeleteOptionalParams,
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      expressRoutePortName,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Retrieves the requested ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of ExpressRoutePort.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    expressRoutePortName: string,
    options?: ExpressRoutePortsGetOptionalParams,
  ): Promise<ExpressRoutePortsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, expressRoutePortName, options },
      getOperationSpec,
    );
  }

  /**
   * Creates or updates the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param parameters Parameters supplied to the create ExpressRoutePort operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdate(
    resourceGroupName: string,
    expressRoutePortName: string,
    parameters: ExpressRoutePort,
    options?: ExpressRoutePortsCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ExpressRoutePortsCreateOrUpdateResponse>,
      ExpressRoutePortsCreateOrUpdateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ): Promise<ExpressRoutePortsCreateOrUpdateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperationFn = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec,
    ) => {
      let currentRawResponse: coreClient.FullOperationResponse | undefined =
        undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown,
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback,
        },
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON(),
        },
      };
    };

    const lro = createLroSpec({
      sendOperationFn,
      args: { resourceGroupName, expressRoutePortName, parameters, options },
      spec: createOrUpdateOperationSpec,
    });
    const poller = await createHttpPoller<
      ExpressRoutePortsCreateOrUpdateResponse,
      OperationState<ExpressRoutePortsCreateOrUpdateResponse>
    >(lro, {
      restoreFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: "azure-async-operation",
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates or updates the specified ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param parameters Parameters supplied to the create ExpressRoutePort operation.
   * @param options The options parameters.
   */
  async beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    expressRoutePortName: string,
    parameters: ExpressRoutePort,
    options?: ExpressRoutePortsCreateOrUpdateOptionalParams,
  ): Promise<ExpressRoutePortsCreateOrUpdateResponse> {
    const poller = await this.beginCreateOrUpdate(
      resourceGroupName,
      expressRoutePortName,
      parameters,
      options,
    );
    return poller.pollUntilDone();
  }

  /**
   * Update ExpressRoutePort tags.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of the ExpressRoutePort resource.
   * @param parameters Parameters supplied to update ExpressRoutePort resource tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    expressRoutePortName: string,
    parameters: TagsObject,
    options?: ExpressRoutePortsUpdateTagsOptionalParams,
  ): Promise<ExpressRoutePortsUpdateTagsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, expressRoutePortName, parameters, options },
      updateTagsOperationSpec,
    );
  }

  /**
   * List all the ExpressRoutePort resources in the specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: ExpressRoutePortsListByResourceGroupOptionalParams,
  ): Promise<ExpressRoutePortsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec,
    );
  }

  /**
   * List all the ExpressRoutePort resources in the specified subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ExpressRoutePortsListOptionalParams,
  ): Promise<ExpressRoutePortsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Generate a letter of authorization for the requested ExpressRoutePort resource.
   * @param resourceGroupName The name of the resource group.
   * @param expressRoutePortName The name of ExpressRoutePort.
   * @param request Request parameters supplied to generate a letter of authorization.
   * @param options The options parameters.
   */
  generateLOA(
    resourceGroupName: string,
    expressRoutePortName: string,
    request: GenerateExpressRoutePortsLOARequest,
    options?: ExpressRoutePortsGenerateLOAOptionalParams,
  ): Promise<ExpressRoutePortsGenerateLOAResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, expressRoutePortName, request, options },
      generateLOAOperationSpec,
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: ExpressRoutePortsListByResourceGroupNextOptionalParams,
  ): Promise<ExpressRoutePortsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec,
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ExpressRoutePortsListNextOptionalParams,
  ): Promise<ExpressRoutePortsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePort,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePort,
    },
    201: {
      bodyMapper: Mappers.ExpressRoutePort,
    },
    202: {
      bodyMapper: Mappers.ExpressRoutePort,
    },
    204: {
      bodyMapper: Mappers.ExpressRoutePort,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters18,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const updateTagsOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts/{expressRoutePortName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePort,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/ExpressRoutePorts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Network/ExpressRoutePorts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer,
};
const generateLOAOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/expressRoutePorts/{expressRoutePortName}/generateLoa",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.GenerateExpressRoutePortsLOAResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  requestBody: Parameters.request,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.expressRoutePortName,
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer,
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ExpressRoutePortListResult,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
