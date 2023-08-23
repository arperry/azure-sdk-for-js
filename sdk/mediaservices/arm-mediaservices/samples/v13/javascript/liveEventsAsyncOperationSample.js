/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get a live event operation status.
 *
 * @summary Get a live event operation status.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Streaming/stable/2022-08-01/examples/async-operation-result.json
 */
async function getTheLiveEventOperationStatus() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "0a6ec948-5a62-437d-b9df-934dc7c1b722";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "mediaresources";
  const accountName = "slitestmedia10";
  const operationId = "62e4d893-d233-4005-988e-a428d9f77076";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.liveEvents.asyncOperation(
    resourceGroupName,
    accountName,
    operationId
  );
  console.log(result);
}

async function main() {
  getTheLiveEventOperationStatus();
}

main().catch(console.error);
