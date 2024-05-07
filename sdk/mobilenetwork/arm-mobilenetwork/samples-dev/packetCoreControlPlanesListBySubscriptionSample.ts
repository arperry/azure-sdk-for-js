/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all the packet core control planes in a subscription.
 *
 * @summary Lists all the packet core control planes in a subscription.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2024-02-01/examples/PacketCoreControlPlaneListBySubscription.json
 */
async function listPacketCoreControlPlanesInASubscription() {
  const subscriptionId =
    process.env["MOBILENETWORK_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.packetCoreControlPlanes.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listPacketCoreControlPlanesInASubscription();
}

main().catch(console.error);
