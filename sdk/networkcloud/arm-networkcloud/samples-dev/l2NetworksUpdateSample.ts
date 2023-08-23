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
  L2NetworkPatchParameters,
  L2NetworksUpdateOptionalParams,
  NetworkCloud
} from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Update tags associated with the provided layer 2 (L2) network.
 *
 * @summary Update tags associated with the provided layer 2 (L2) network.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/stable/2023-07-01/examples/L2Networks_Patch.json
 */
async function patchL2Network() {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const l2NetworkName = "l2NetworkName";
  const l2NetworkUpdateParameters: L2NetworkPatchParameters = {
    tags: { key1: "myvalue1", key2: "myvalue2" }
  };
  const options: L2NetworksUpdateOptionalParams = { l2NetworkUpdateParameters };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.l2Networks.update(
    resourceGroupName,
    l2NetworkName,
    options
  );
  console.log(result);
}

async function main() {
  patchL2Network();
}

main().catch(console.error);
