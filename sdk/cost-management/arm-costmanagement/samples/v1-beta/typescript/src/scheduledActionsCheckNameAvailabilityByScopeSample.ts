/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  CheckNameAvailabilityRequest,
  CostManagementClient
} from "@azure/arm-costmanagement";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Checks availability and correctness of the name for a scheduled action within the given scope.
 *
 * @summary Checks availability and correctness of the name for a scheduled action within the given scope.
 * x-ms-original-file: specification/cost-management/resource-manager/Microsoft.CostManagement/stable/2022-10-01/examples/scheduledActions/checkNameAvailability-shared-scheduledAction.json
 */
async function scheduledActionCheckNameAvailabilityByScope() {
  const scope = "subscriptions/00000000-0000-0000-0000-000000000000";
  const checkNameAvailabilityRequest: CheckNameAvailabilityRequest = {
    name: "testName",
    type: "Microsoft.CostManagement/ScheduledActions"
  };
  const credential = new DefaultAzureCredential();
  const client = new CostManagementClient(credential);
  const result = await client.scheduledActions.checkNameAvailabilityByScope(
    scope,
    checkNameAvailabilityRequest
  );
  console.log(result);
}

async function main() {
  scheduledActionCheckNameAvailabilityByScope();
}

main().catch(console.error);
