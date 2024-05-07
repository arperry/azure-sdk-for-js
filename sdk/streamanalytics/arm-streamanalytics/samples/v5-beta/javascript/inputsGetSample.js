/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { StreamAnalyticsManagementClient } = require("@azure/arm-streamanalytics");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets details about the specified input.
 *
 * @summary Gets details about the specified input.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Input_Get_Reference_Blob_CSV.json
 */
async function getAReferenceBlobInputWithCsvSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg8440";
  const jobName = "sj9597";
  const inputName = "input7225";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.inputs.get(resourceGroupName, jobName, inputName);
  console.log(result);
}

/**
 * This sample demonstrates how to Gets details about the specified input.
 *
 * @summary Gets details about the specified input.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Input_Get_Stream_EventHub_JSON.json
 */
async function getAStreamEventHubInputWithJsonSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg3139";
  const jobName = "sj197";
  const inputName = "input7425";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.inputs.get(resourceGroupName, jobName, inputName);
  console.log(result);
}

/**
 * This sample demonstrates how to Gets details about the specified input.
 *
 * @summary Gets details about the specified input.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Input_Get_Stream_IoTHub_Avro.json
 */
async function getAStreamIoTHubInputWithAvroSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg3467";
  const jobName = "sj9742";
  const inputName = "input7970";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.inputs.get(resourceGroupName, jobName, inputName);
  console.log(result);
}

/**
 * This sample demonstrates how to Gets details about the specified input.
 *
 * @summary Gets details about the specified input.
 * x-ms-original-file: specification/streamanalytics/resource-manager/Microsoft.StreamAnalytics/preview/2021-10-01-preview/examples/Input_Get_Stream_Blob_CSV.json
 */
async function getAStreamBlobInputWithCsvSerialization() {
  const subscriptionId =
    process.env["STREAMANALYTICS_SUBSCRIPTION_ID"] || "56b5e0a9-b645-407d-99b0-c64f86013e3d";
  const resourceGroupName = process.env["STREAMANALYTICS_RESOURCE_GROUP"] || "sjrg8161";
  const jobName = "sj6695";
  const inputName = "input8899";
  const credential = new DefaultAzureCredential();
  const client = new StreamAnalyticsManagementClient(credential, subscriptionId);
  const result = await client.inputs.get(resourceGroupName, jobName, inputName);
  console.log(result);
}

async function main() {
  getAReferenceBlobInputWithCsvSerialization();
  getAStreamEventHubInputWithJsonSerialization();
  getAStreamIoTHubInputWithAvroSerialization();
  getAStreamBlobInputWithCsvSerialization();
}

main().catch(console.error);
