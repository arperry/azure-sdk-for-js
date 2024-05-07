/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { SpringAppDiscoveryManagementClient } from "@azure/arm-springappdiscovery";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Get a springbootsites resource.
 *
 * @summary Get a springbootsites resource.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_Get_MaximumSet_Gen.json
 */
async function springbootsitesGetMaximumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] ||
    "chshxczdscjpcyvyethat";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootsites";
  const springbootsitesName = "xrmzlavpewxtfeitghdrj";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.springbootsites.get(
    resourceGroupName,
    springbootsitesName,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Get a springbootsites resource.
 *
 * @summary Get a springbootsites resource.
 * x-ms-original-file: specification/offazurespringboot/resource-manager/Microsoft.OffAzureSpringBoot/preview/2023-01-01-preview/examples/springbootsites_Get_MinimumSet_Gen.json
 */
async function springbootsitesGetMinimumSetGen() {
  const subscriptionId =
    process.env["SPRINGAPPDISCOVERY_SUBSCRIPTION_ID"] ||
    "chshxczdscjpcyvyethat";
  const resourceGroupName =
    process.env["SPRINGAPPDISCOVERY_RESOURCE_GROUP"] || "rgspringbootsites";
  const springbootsitesName = "xrmzlavpewxtfeitghdrj";
  const credential = new DefaultAzureCredential();
  const client = new SpringAppDiscoveryManagementClient(
    credential,
    subscriptionId,
  );
  const result = await client.springbootsites.get(
    resourceGroupName,
    springbootsitesName,
  );
  console.log(result);
}

async function main() {
  springbootsitesGetMaximumSetGen();
  springbootsitesGetMinimumSetGen();
}

main().catch(console.error);
