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
  GraphResourceCreateUpdateParameters,
  CosmosDBManagementClient,
} from "@azure/arm-cosmosdb";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Create or update an Azure Cosmos DB Graph.
 *
 * @summary Create or update an Azure Cosmos DB Graph.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/preview/2024-02-15-preview/examples/CosmosDBGraphResourceCreateUpdate.json
 */
async function cosmosDbGraphCreateUpdate() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const graphName = "graphName";
  const createUpdateGraphParameters: GraphResourceCreateUpdateParameters = {
    location: "West US",
    options: {},
    resource: { id: "graphName" },
    tags: {},
  };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const result = await client.graphResources.beginCreateUpdateGraphAndWait(
    resourceGroupName,
    accountName,
    graphName,
    createUpdateGraphParameters,
  );
  console.log(result);
}

async function main() {
  cosmosDbGraphCreateUpdate();
}

main().catch(console.error);
