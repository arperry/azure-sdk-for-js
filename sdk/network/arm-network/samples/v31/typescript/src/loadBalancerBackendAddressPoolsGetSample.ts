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
 * This sample demonstrates how to Gets load balancer backend address pool.
 *
 * @summary Gets load balancer backend address pool.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-11-01/examples/LBBackendAddressPoolWithBackendAddressesGet.json
 */
async function loadBalancerWithBackendAddressPoolWithBackendAddresses() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "testrg";
  const loadBalancerName = "lb";
  const backendAddressPoolName = "backend";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancerBackendAddressPools.get(
    resourceGroupName,
    loadBalancerName,
    backendAddressPoolName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets load balancer backend address pool.
 *
 * @summary Gets load balancer backend address pool.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-11-01/examples/LoadBalancerBackendAddressPoolGet.json
 */
async function loadBalancerBackendAddressPoolGet() {
  const subscriptionId = process.env["NETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["NETWORK_RESOURCE_GROUP"] || "testrg";
  const loadBalancerName = "lb";
  const backendAddressPoolName = "backend";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.loadBalancerBackendAddressPools.get(
    resourceGroupName,
    loadBalancerName,
    backendAddressPoolName
  );
  console.log(result);
}

async function main() {
  loadBalancerWithBackendAddressPoolWithBackendAddresses();
  loadBalancerBackendAddressPoolGet();
}

main().catch(console.error);