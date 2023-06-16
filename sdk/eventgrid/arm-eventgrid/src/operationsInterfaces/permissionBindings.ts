/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  PermissionBinding,
  PermissionBindingsListByNamespaceOptionalParams,
  PermissionBindingsGetOptionalParams,
  PermissionBindingsGetResponse,
  PermissionBindingsCreateOrUpdateOptionalParams,
  PermissionBindingsCreateOrUpdateResponse,
  PermissionBindingsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PermissionBindings. */
export interface PermissionBindings {
  /**
   * Get all the permission bindings under a namespace.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param options The options parameters.
   */
  listByNamespace(
    resourceGroupName: string,
    namespaceName: string,
    options?: PermissionBindingsListByNamespaceOptionalParams
  ): PagedAsyncIterableIterator<PermissionBinding>;
  /**
   * Get properties of a permission binding.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param permissionBindingName Name of the permission binding.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    namespaceName: string,
    permissionBindingName: string,
    options?: PermissionBindingsGetOptionalParams
  ): Promise<PermissionBindingsGetResponse>;
  /**
   * Create or update a permission binding with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param permissionBindingName The permission binding name.
   * @param permissionBindingInfo Permission binding information.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    namespaceName: string,
    permissionBindingName: string,
    permissionBindingInfo: PermissionBinding,
    options?: PermissionBindingsCreateOrUpdateOptionalParams
  ): Promise<
    SimplePollerLike<
      OperationState<PermissionBindingsCreateOrUpdateResponse>,
      PermissionBindingsCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update a permission binding with the specified parameters.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param permissionBindingName The permission binding name.
   * @param permissionBindingInfo Permission binding information.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    namespaceName: string,
    permissionBindingName: string,
    permissionBindingInfo: PermissionBinding,
    options?: PermissionBindingsCreateOrUpdateOptionalParams
  ): Promise<PermissionBindingsCreateOrUpdateResponse>;
  /**
   * Delete an existing permission binding.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param permissionBindingName Name of the permission binding.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    namespaceName: string,
    permissionBindingName: string,
    options?: PermissionBindingsDeleteOptionalParams
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete an existing permission binding.
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param namespaceName Name of the namespace.
   * @param permissionBindingName Name of the permission binding.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    namespaceName: string,
    permissionBindingName: string,
    options?: PermissionBindingsDeleteOptionalParams
  ): Promise<void>;
}