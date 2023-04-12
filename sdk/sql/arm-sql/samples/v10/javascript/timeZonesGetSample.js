/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SqlManagementClient } = require("@azure/arm-sql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets a managed instance time zone.
 *
 * @summary Gets a managed instance time zone.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ManagedInstanceTimeZoneGet.json
 */
async function getManagedInstanceTimeZone() {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] || "37d5e605-6142-4d79-b564-28b6dbfeec0f";
  const locationName = "canadaeast";
  const timeZoneId = "Haiti Standard Time";
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.timeZones.get(locationName, timeZoneId);
  console.log(result);
}

async function main() {
  getManagedInstanceTimeZone();
}

main().catch(console.error);