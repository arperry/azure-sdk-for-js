/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { StandbyPoolManagementClient } from "@azure/arm-standbypool";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List StandbyContainerGroupPoolResource resources by resource group
 *
 * @summary List StandbyContainerGroupPoolResource resources by resource group
 * x-ms-original-file: specification/standbypool/resource-manager/Microsoft.StandbyPool/preview/2023-12-01-preview/examples/StandbyContainerGroupPools_ListByResourceGroup.json
 */
async function standbyContainerGroupPoolsListByResourceGroup() {
  const subscriptionId =
    process.env["STANDBYPOOL_SUBSCRIPTION_ID"] ||
    "8CC31D61-82D7-4B2B-B9DC-6B924DE7D229";
  const resourceGroupName =
    process.env["STANDBYPOOL_RESOURCE_GROUP"] || "rgstandbypool";
  const credential = new DefaultAzureCredential();
  const client = new StandbyPoolManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.standbyContainerGroupPools.listByResourceGroup(
    resourceGroupName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  standbyContainerGroupPoolsListByResourceGroup();
}

main().catch(console.error);
