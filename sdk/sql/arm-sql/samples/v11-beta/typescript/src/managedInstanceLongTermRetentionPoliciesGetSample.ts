/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SqlManagementClient } from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets a managed database's long term retention policy.
 *
 * @summary Gets a managed database's long term retention policy.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceLongTermRetentionPolicyGet.json
 */
async function getTheLongTermRetentionPolicyForTheManagedDatabase() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName =
    process.env["SQL_RESOURCE_GROUP"] || "testResourceGroup";
  const managedInstanceName = "testInstance";
  const databaseName = "testDatabase";
  const policyName = "default";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.managedInstanceLongTermRetentionPolicies.get(
    resourceGroupName,
    managedInstanceName,
    databaseName,
    policyName
  );
  console.log(result);
}

async function main() {
  getTheLongTermRetentionPolicyForTheManagedDatabase();
}

main().catch(console.error);
