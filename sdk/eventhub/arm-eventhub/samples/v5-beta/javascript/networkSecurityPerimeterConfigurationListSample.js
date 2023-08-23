/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventHubManagementClient } = require("@azure/arm-eventhub");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets list of current NetworkSecurityPerimeterConfiguration for Namespace
 *
 * @summary Gets list of current NetworkSecurityPerimeterConfiguration for Namespace
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/preview/2022-10-01-preview/examples/NameSpaces/NetworkSecurityPerimeterConfigurationList.json
 */
async function namspaceNetworkSecurityPerimeterConfigurationList() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["EVENTHUB_RESOURCE_GROUP"] || "SDK-EventHub-4794";
  const namespaceName = "sdk-Namespace-5828";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const result = await client.networkSecurityPerimeterConfigurationOperations.list(
    resourceGroupName,
    namespaceName
  );
  console.log(result);
}

async function main() {
  namspaceNetworkSecurityPerimeterConfigurationList();
}

main().catch(console.error);
