/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Deletes virtual machines in a VM scale set.
 *
 * @summary Deletes virtual machines in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSets_DeleteInstances_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetsDeleteInstancesMaximumSetGen() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaaaa";
  const forceDeletion = true;
  const vmInstanceIDs = {
    instanceIds: ["aaaaaaaaaaaaaaaaaaaaaaaaa"],
  };
  const options = {
    forceDeletion,
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginDeleteInstancesAndWait(
    resourceGroupName,
    vmScaleSetName,
    vmInstanceIDs,
    options
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Deletes virtual machines in a VM scale set.
 *
 * @summary Deletes virtual machines in a VM scale set.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2022-11-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSets_DeleteInstances_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetsDeleteInstancesMinimumSetGen() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaa";
  const vmInstanceIDs = {
    instanceIds: ["aaaaaaaaaaaaaaaaaaaaaaaaa"],
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSets.beginDeleteInstancesAndWait(
    resourceGroupName,
    vmScaleSetName,
    vmInstanceIDs
  );
  console.log(result);
}

async function main() {
  virtualMachineScaleSetsDeleteInstancesMaximumSetGen();
  virtualMachineScaleSetsDeleteInstancesMinimumSetGen();
}

main().catch(console.error);