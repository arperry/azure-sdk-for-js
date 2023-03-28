/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { CosmosDBManagementClient } from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Retrieves the properties of an existing Azure Cosmos DB SQL Role Definition with the given Id.
 *
 * @summary Retrieves the properties of an existing Azure Cosmos DB SQL Role Definition with the given Id.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2022-08-15-preview/examples/CosmosDBSqlRoleDefinitionGet.json
 */
async function cosmosDbSqlRoleDefinitionGet() {
  const subscriptionId =
    process.env["COSMOSDB_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const roleDefinitionId = "myRoleDefinitionId";
  const resourceGroupName =
    process.env["COSMOSDB_RESOURCE_GROUP"] || "myResourceGroupName";
  const accountName = "myAccountName";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.sqlResources.getSqlRoleDefinition(
    roleDefinitionId,
    resourceGroupName,
    accountName
  );
  console.log(result);
}

async function main() {
  cosmosDbSqlRoleDefinitionGet();
}

main().catch(console.error);