/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  GuestConfigurationAssignment,
  GuestConfigurationAssignmentsSubscriptionListOptionalParams,
  GuestConfigurationAssignmentsRGListOptionalParams,
  GuestConfigurationAssignmentsListOptionalParams,
  GuestConfigurationAssignmentsCreateOrUpdateOptionalParams,
  GuestConfigurationAssignmentsCreateOrUpdateResponse,
  GuestConfigurationAssignmentsGetOptionalParams,
  GuestConfigurationAssignmentsGetResponse,
  GuestConfigurationAssignmentsDeleteOptionalParams,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a GuestConfigurationAssignments. */
export interface GuestConfigurationAssignments {
  /**
   * List all guest configuration assignments for a subscription.
   * @param options The options parameters.
   */
  listSubscriptionList(
    options?: GuestConfigurationAssignmentsSubscriptionListOptionalParams,
  ): PagedAsyncIterableIterator<GuestConfigurationAssignment>;
  /**
   * List all guest configuration assignments for a resource group.
   * @param resourceGroupName The resource group name.
   * @param options The options parameters.
   */
  listRGList(
    resourceGroupName: string,
    options?: GuestConfigurationAssignmentsRGListOptionalParams,
  ): PagedAsyncIterableIterator<GuestConfigurationAssignment>;
  /**
   * List all guest configuration assignments for a virtual machine.
   * @param resourceGroupName The resource group name.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    vmName: string,
    options?: GuestConfigurationAssignmentsListOptionalParams,
  ): PagedAsyncIterableIterator<GuestConfigurationAssignment>;
  /**
   * Creates an association between a VM and guest configuration
   * @param guestConfigurationAssignmentName Name of the guest configuration assignment.
   * @param resourceGroupName The resource group name.
   * @param vmName The name of the virtual machine.
   * @param parameters Parameters supplied to the create or update guest configuration assignment.
   * @param options The options parameters.
   */
  createOrUpdate(
    guestConfigurationAssignmentName: string,
    resourceGroupName: string,
    vmName: string,
    parameters: GuestConfigurationAssignment,
    options?: GuestConfigurationAssignmentsCreateOrUpdateOptionalParams,
  ): Promise<GuestConfigurationAssignmentsCreateOrUpdateResponse>;
  /**
   * Get information about a guest configuration assignment
   * @param resourceGroupName The resource group name.
   * @param guestConfigurationAssignmentName The guest configuration assignment name.
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    guestConfigurationAssignmentName: string,
    vmName: string,
    options?: GuestConfigurationAssignmentsGetOptionalParams,
  ): Promise<GuestConfigurationAssignmentsGetResponse>;
  /**
   * Delete a guest configuration assignment
   * @param resourceGroupName The resource group name.
   * @param guestConfigurationAssignmentName Name of the guest configuration assignment
   * @param vmName The name of the virtual machine.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    guestConfigurationAssignmentName: string,
    vmName: string,
    options?: GuestConfigurationAssignmentsDeleteOptionalParams,
  ): Promise<void>;
}
