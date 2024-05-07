/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { CosmosDBForPostgreSQL } = require("@azure/arm-cosmosdbforpostgresql");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Lists all the firewall rules on cluster.
 *
 * @summary Lists all the firewall rules on cluster.
 * x-ms-original-file: specification/postgresqlhsc/resource-manager/Microsoft.DBforPostgreSQL/preview/2023-03-02-preview/examples/FirewallRuleListByCluster.json
 */
async function listFirewallRulesOfTheCluster() {
  const subscriptionId =
    process.env["COSMOSFORPOSTGRESQL_SUBSCRIPTION_ID"] || "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["COSMOSFORPOSTGRESQL_RESOURCE_GROUP"] || "TestGroup";
  const clusterName = "pgtestsvc4";
  const credential = new DefaultAzureCredential();
  const client = new CosmosDBForPostgreSQL(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.firewallRules.listByCluster(resourceGroupName, clusterName)) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listFirewallRulesOfTheCluster();
}

main().catch(console.error);
