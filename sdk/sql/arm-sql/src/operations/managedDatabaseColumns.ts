/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ManagedDatabaseColumns } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  DatabaseColumn,
  ManagedDatabaseColumnsListByDatabaseNextOptionalParams,
  ManagedDatabaseColumnsListByDatabaseOptionalParams,
  ManagedDatabaseColumnsListByDatabaseResponse,
  ManagedDatabaseColumnsListByTableNextOptionalParams,
  ManagedDatabaseColumnsListByTableOptionalParams,
  ManagedDatabaseColumnsListByTableResponse,
  ManagedDatabaseColumnsGetOptionalParams,
  ManagedDatabaseColumnsGetResponse,
  ManagedDatabaseColumnsListByDatabaseNextResponse,
  ManagedDatabaseColumnsListByTableNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ManagedDatabaseColumns operations. */
export class ManagedDatabaseColumnsImpl implements ManagedDatabaseColumns {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class ManagedDatabaseColumns class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * List managed database columns
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseColumnsListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DatabaseColumn> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseColumnsListByDatabaseOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DatabaseColumn[]> {
    let result: ManagedDatabaseColumnsListByDatabaseResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByDatabase(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByDatabaseNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseColumnsListByDatabaseOptionalParams
  ): AsyncIterableIterator<DatabaseColumn> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List managed database columns
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param options The options parameters.
   */
  public listByTable(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    options?: ManagedDatabaseColumnsListByTableOptionalParams
  ): PagedAsyncIterableIterator<DatabaseColumn> {
    const iter = this.listByTablePagingAll(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      schemaName,
      tableName,
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
        return this.listByTablePagingPage(
          resourceGroupName,
          managedInstanceName,
          databaseName,
          schemaName,
          tableName,
          options,
          settings
        );
      }
    };
  }

  private async *listByTablePagingPage(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    options?: ManagedDatabaseColumnsListByTableOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DatabaseColumn[]> {
    let result: ManagedDatabaseColumnsListByTableResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByTable(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByTableNext(
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByTablePagingAll(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    options?: ManagedDatabaseColumnsListByTableOptionalParams
  ): AsyncIterableIterator<DatabaseColumn> {
    for await (const page of this.listByTablePagingPage(
      resourceGroupName,
      managedInstanceName,
      databaseName,
      schemaName,
      tableName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List managed database columns
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    options?: ManagedDatabaseColumnsListByDatabaseOptionalParams
  ): Promise<ManagedDatabaseColumnsListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, managedInstanceName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }

  /**
   * List managed database columns
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param options The options parameters.
   */
  private _listByTable(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    options?: ManagedDatabaseColumnsListByTableOptionalParams
  ): Promise<ManagedDatabaseColumnsListByTableResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        options
      },
      listByTableOperationSpec
    );
  }

  /**
   * Get managed database column
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param columnName The name of the column.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    columnName: string,
    options?: ManagedDatabaseColumnsGetOptionalParams
  ): Promise<ManagedDatabaseColumnsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        columnName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListByDatabaseNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param nextLink The nextLink from the previous successful call to the ListByDatabase method.
   * @param options The options parameters.
   */
  private _listByDatabaseNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    nextLink: string,
    options?: ManagedDatabaseColumnsListByDatabaseNextOptionalParams
  ): Promise<ManagedDatabaseColumnsListByDatabaseNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        nextLink,
        options
      },
      listByDatabaseNextOperationSpec
    );
  }

  /**
   * ListByTableNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param nextLink The nextLink from the previous successful call to the ListByTable method.
   * @param options The options parameters.
   */
  private _listByTableNext(
    resourceGroupName: string,
    managedInstanceName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    nextLink: string,
    options?: ManagedDatabaseColumnsListByTableNextOptionalParams
  ): Promise<ManagedDatabaseColumnsListByTableNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        databaseName,
        schemaName,
        tableName,
        nextLink,
        options
      },
      listByTableNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/columns",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseColumnListResult
    },
    default: {}
  },
  queryParameters: [
    Parameters.apiVersion2,
    Parameters.schema,
    Parameters.table,
    Parameters.column,
    Parameters.orderBy,
    Parameters.skiptoken
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTableOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseColumnListResult
    },
    default: {}
  },
  queryParameters: [Parameters.filter1, Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}/columns/{columnName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseColumn
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.columnName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByDatabaseNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseColumnListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByTableNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseColumnListResult
    },
    default: {}
  },
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.schemaName,
    Parameters.tableName,
    Parameters.managedInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
