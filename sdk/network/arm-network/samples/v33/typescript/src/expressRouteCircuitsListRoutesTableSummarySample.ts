/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets the currently advertised routes table summary associated with the express route circuit in a resource group.
 *
 * @summary Gets the currently advertised routes table summary associated with the express route circuit in a resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2023-09-01/examples/ExpressRouteCircuitRouteTableSummaryList.json
 */
async function listRouteTableSummary() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "rg1";
  const circuitName = "circuitName";
  const peeringName = "peeringName";
  const devicePath = "devicePath";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result =
    await client.expressRouteCircuits.beginListRoutesTableSummaryAndWait(
      resourceGroupName,
      circuitName,
      peeringName,
      devicePath,
    );
  console.log(result);
}

async function main() {
  listRouteTableSummary();
}

main().catch(console.error);
