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
 * This sample demonstrates how to Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.
 *
 * @summary Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-03-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetRollingUpgrade_StartOSUpgrade_MaximumSet_Gen.json
 */
async function virtualMachineScaleSetRollingUpgradeStartOSUpgradeMaximumSetGen() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetRollingUpgrades.beginStartOSUpgradeAndWait(
    resourceGroupName,
    vmScaleSetName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.
 *
 * @summary Starts a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/ComputeRP/stable/2024-03-01/examples/virtualMachineScaleSetExamples/VirtualMachineScaleSetRollingUpgrade_StartOSUpgrade_MinimumSet_Gen.json
 */
async function virtualMachineScaleSetRollingUpgradeStartOSUpgradeMinimumSetGen() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "rgcompute";
  const vmScaleSetName = "aaaaaaaaaaaaaaaaaa";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.virtualMachineScaleSetRollingUpgrades.beginStartOSUpgradeAndWait(
    resourceGroupName,
    vmScaleSetName,
  );
  console.log(result);
}

async function main() {
  virtualMachineScaleSetRollingUpgradeStartOSUpgradeMaximumSetGen();
  virtualMachineScaleSetRollingUpgradeStartOSUpgradeMinimumSetGen();
}

main().catch(console.error);
