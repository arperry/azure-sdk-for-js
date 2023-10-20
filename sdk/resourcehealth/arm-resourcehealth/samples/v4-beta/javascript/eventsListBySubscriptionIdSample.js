/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MicrosoftResourceHealth } = require("@azure/arm-resourcehealth");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists service health events in the subscription.
 *
 * @summary Lists service health events in the subscription.
 * x-ms-original-file: specification/resourcehealth/resource-manager/Microsoft.ResourceHealth/preview/2023-10-01-preview/examples/Events_ListBySubscriptionId.json
 */
async function listEventsBySubscriptionId() {
  const subscriptionId = process.env["RESOURCEHEALTH_SUBSCRIPTION_ID"] || "subscriptionId";
  const filter = "service eq 'Virtual Machines' or region eq 'West US'";
  const queryStartTime = "7/24/2020";
  const options = {
    filter,
    queryStartTime,
  };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftResourceHealth(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.eventsOperations.listBySubscriptionId(options)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listEventsBySubscriptionId();
}

main().catch(console.error);
