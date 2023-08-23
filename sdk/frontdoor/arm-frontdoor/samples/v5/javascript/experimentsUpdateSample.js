/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { FrontDoorManagementClient } = require("@azure/arm-frontdoor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates an Experiment
 *
 * @summary Updates an Experiment
 * x-ms-original-file: specification/frontdoor/resource-manager/Microsoft.Network/stable/2019-11-01/examples/NetworkExperimentUpdateExperiment.json
 */
async function updatesAnExperiment() {
  const subscriptionId = process.env["FRONTDOOR_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["FRONTDOOR_RESOURCE_GROUP"] || "MyResourceGroup";
  const profileName = "MyProfile";
  const experimentName = "MyExperiment";
  const parameters = {
    description: "string",
    enabledState: "Enabled",
  };
  const credential = new DefaultAzureCredential();
  const client = new FrontDoorManagementClient(credential, subscriptionId);
  const result = await client.experiments.beginUpdateAndWait(
    resourceGroupName,
    profileName,
    experimentName,
    parameters
  );
  console.log(result);
}

async function main() {
  updatesAnExperiment();
}

main().catch(console.error);
