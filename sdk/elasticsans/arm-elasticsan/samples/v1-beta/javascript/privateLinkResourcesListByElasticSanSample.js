/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ElasticSanManagement } = require("@azure/arm-elasticsan");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Gets the private link resources that need to be created for a elastic San.
 *
 * @summary Gets the private link resources that need to be created for a elastic San.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2022-12-01-preview/examples/PrivateLinkResources_ListByElasticSan_MaximumSet_Gen.json
 */
async function privateLinkResourcesListByElasticSanMaximumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.privateLinkResources.listByElasticSan(
    resourceGroupName,
    elasticSanName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Gets the private link resources that need to be created for a elastic San.
 *
 * @summary Gets the private link resources that need to be created for a elastic San.
 * x-ms-original-file: specification/elasticsan/resource-manager/Microsoft.ElasticSan/preview/2022-12-01-preview/examples/PrivateLinkResources_ListByElasticSan_MinimumSet_Gen.json
 */
async function privateLinkResourcesListByElasticSanMinimumSetGen() {
  const subscriptionId = process.env["ELASTICSANS_SUBSCRIPTION_ID"] || "subscriptionid";
  const resourceGroupName = process.env["ELASTICSANS_RESOURCE_GROUP"] || "resourcegroupname";
  const elasticSanName = "elasticsanname";
  const credential = new DefaultAzureCredential();
  const client = new ElasticSanManagement(credential, subscriptionId);
  const result = await client.privateLinkResources.listByElasticSan(
    resourceGroupName,
    elasticSanName
  );
  console.log(result);
}

async function main() {
  privateLinkResourcesListByElasticSanMaximumSetGen();
  privateLinkResourcesListByElasticSanMinimumSetGen();
}

main().catch(console.error);
