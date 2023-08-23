/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Certificates } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContainerAppsAPIClient } from "../containerAppsAPIClient";
import {
  Certificate,
  CertificatesListNextOptionalParams,
  CertificatesListOptionalParams,
  CertificatesListResponse,
  CertificatesGetOptionalParams,
  CertificatesGetResponse,
  CertificatesCreateOrUpdateOptionalParams,
  CertificatesCreateOrUpdateResponse,
  CertificatesDeleteOptionalParams,
  CertificatePatch,
  CertificatesUpdateOptionalParams,
  CertificatesUpdateResponse,
  CertificatesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Certificates operations. */
export class CertificatesImpl implements Certificates {
  private readonly client: ContainerAppsAPIClient;

  /**
   * Initialize a new instance of the class Certificates class.
   * @param client Reference to the service client
   */
  constructor(client: ContainerAppsAPIClient) {
    this.client = client;
  }

  /**
   * Get the Certificates in a given managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    environmentName: string,
    options?: CertificatesListOptionalParams
  ): PagedAsyncIterableIterator<Certificate> {
    const iter = this.listPagingAll(
      resourceGroupName,
      environmentName,
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
        return this.listPagingPage(
          resourceGroupName,
          environmentName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    environmentName: string,
    options?: CertificatesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Certificate[]> {
    let result: CertificatesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, environmentName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        environmentName,
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
    resourceGroupName: string,
    environmentName: string,
    options?: CertificatesListOptionalParams
  ): AsyncIterableIterator<Certificate> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      environmentName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the Certificates in a given managed environment.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    environmentName: string,
    options?: CertificatesListOptionalParams
  ): Promise<CertificatesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, options },
      listOperationSpec
    );
  }

  /**
   * Get the specified Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param certificateName Name of the Certificate.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    environmentName: string,
    certificateName: string,
    options?: CertificatesGetOptionalParams
  ): Promise<CertificatesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, certificateName, options },
      getOperationSpec
    );
  }

  /**
   * Create or Update a Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param certificateName Name of the Certificate.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    environmentName: string,
    certificateName: string,
    options?: CertificatesCreateOrUpdateOptionalParams
  ): Promise<CertificatesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, certificateName, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the specified Certificate.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param certificateName Name of the Certificate.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    environmentName: string,
    certificateName: string,
    options?: CertificatesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, certificateName, options },
      deleteOperationSpec
    );
  }

  /**
   * Patches a certificate. Currently only patching of tags is supported
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param certificateName Name of the Certificate.
   * @param certificateEnvelope Properties of a certificate that need to be updated
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    environmentName: string,
    certificateName: string,
    certificateEnvelope: CertificatePatch,
    options?: CertificatesUpdateOptionalParams
  ): Promise<CertificatesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        certificateName,
        certificateEnvelope,
        options
      },
      updateOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param environmentName Name of the Managed Environment.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    environmentName: string,
    nextLink: string,
    options?: CertificatesListNextOptionalParams
  ): Promise<CertificatesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, environmentName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates/{certificateName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateName,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates/{certificateName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateEnvelope,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateName,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates/{certificateName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateName,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.App/managedEnvironments/{environmentName}/certificates/{certificateName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.Certificate
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  requestBody: Parameters.certificateEnvelope1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.certificateName,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CertificateCollection
    },
    default: {
      bodyMapper: Mappers.DefaultErrorResponse
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink,
    Parameters.environmentName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
