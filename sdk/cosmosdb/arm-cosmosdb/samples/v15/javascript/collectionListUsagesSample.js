/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBManagementClient } = require("@azure/arm-cosmosdb");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Retrieves the usages (most recent storage data) for the given collection.
 *
 * @summary Retrieves the usages (most recent storage data) for the given collection.
 * x-ms-original-file: specification/cosmos-db/resource-manager/Microsoft.DocumentDB/stable/2023-04-15/examples/CosmosDBCollectionGetUsages.json
 */
async function cosmosDbCollectionGetUsages() {
  const subscriptionId = process.env["COSMOSDB_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["COSMOSDB_RESOURCE_GROUP"] || "rg1";
  const accountName = "ddb1";
  const databaseRid = "databaseRid";
  const collectionRid = "collectionRid";
  const filter = "$filter=name.value eq 'Storage'";
  const options = { filter };
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.collection.listUsages(
    resourceGroupName,
    accountName,
    databaseRid,
    collectionRid,
    options
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  cosmosDbCollectionGetUsages();
}

main().catch(console.error);
