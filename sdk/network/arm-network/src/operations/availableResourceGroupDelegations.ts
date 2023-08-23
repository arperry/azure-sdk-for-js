/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { AvailableResourceGroupDelegations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClient } from "../networkManagementClient";
import {
  AvailableDelegation,
  AvailableResourceGroupDelegationsListNextOptionalParams,
  AvailableResourceGroupDelegationsListOptionalParams,
  AvailableResourceGroupDelegationsListResponse,
  AvailableResourceGroupDelegationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing AvailableResourceGroupDelegations operations. */
export class AvailableResourceGroupDelegationsImpl
  implements AvailableResourceGroupDelegations {
  private readonly client: NetworkManagementClient;

  /**
   * Initialize a new instance of the class AvailableResourceGroupDelegations class.
   * @param client Reference to the service client
   */
  constructor(client: NetworkManagementClient) {
    this.client = client;
  }

  /**
   * Gets all of the available subnet delegations for this resource group in this region.
   * @param location The location of the domain name.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  public list(
    location: string,
    resourceGroupName: string,
    options?: AvailableResourceGroupDelegationsListOptionalParams
  ): PagedAsyncIterableIterator<AvailableDelegation> {
    const iter = this.listPagingAll(location, resourceGroupName, options);
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
        return this.listPagingPage(
          location,
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    location: string,
    resourceGroupName: string,
    options?: AvailableResourceGroupDelegationsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<AvailableDelegation[]> {
    let result: AvailableResourceGroupDelegationsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(location, resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        location,
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    location: string,
    resourceGroupName: string,
    options?: AvailableResourceGroupDelegationsListOptionalParams
  ): AsyncIterableIterator<AvailableDelegation> {
    for await (const page of this.listPagingPage(
      location,
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all of the available subnet delegations for this resource group in this region.
   * @param location The location of the domain name.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    resourceGroupName: string,
    options?: AvailableResourceGroupDelegationsListOptionalParams
  ): Promise<AvailableResourceGroupDelegationsListResponse> {
    return this.client.sendOperationRequest(
      { location, resourceGroupName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param location The location of the domain name.
   * @param resourceGroupName The name of the resource group.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    resourceGroupName: string,
    nextLink: string,
    options?: AvailableResourceGroupDelegationsListNextOptionalParams
  ): Promise<AvailableResourceGroupDelegationsListNextResponse> {
    return this.client.sendOperationRequest(
      { location, resourceGroupName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/locations/{location}/availableDelegations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableDelegationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AvailableDelegationsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
