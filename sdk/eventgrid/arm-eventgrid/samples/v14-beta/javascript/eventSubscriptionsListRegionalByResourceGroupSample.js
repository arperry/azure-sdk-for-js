/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List all event subscriptions from the given location under a specific Azure subscription and resource group.
 *
 * @summary List all event subscriptions from the given location under a specific Azure subscription and resource group.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/preview/2024-06-01-preview/examples/EventSubscriptions_ListRegionalByResourceGroup.json
 */
async function eventSubscriptionsListRegionalByResourceGroup() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] || "8f6b6269-84f2-4d09-9e31-1127efcd1e40";
  const resourceGroupName = process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const location = "westus2";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.eventSubscriptions.listRegionalByResourceGroup(
    resourceGroupName,
    location,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  eventSubscriptionsListRegionalByResourceGroup();
}

main().catch(console.error);
