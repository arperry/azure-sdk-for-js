/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SecurityInsights } = require("@azure/arm-securityinsight");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets an entity query.
 *
 * @summary Gets an entity query.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-01-01-preview/examples/entityQueries/GetActivityEntityQueryById.json
 */
async function getAnActivityEntityQuery() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityQueryId = "07da3cc8-c8ad-4710-a44e-334cdcb7882b";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entityQueries.get(resourceGroupName, workspaceName, entityQueryId);
  console.log(result);
}

getAnActivityEntityQuery().catch(console.error);

/**
 * This sample demonstrates how to Gets an entity query.
 *
 * @summary Gets an entity query.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2022-01-01-preview/examples/entityQueries/GetExpansionEntityQueryById.json
 */
async function getAnExpansionEntityQuery() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const entityQueryId = "07da3cc8-c8ad-4710-a44e-334cdcb7882b";
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.entityQueries.get(resourceGroupName, workspaceName, entityQueryId);
  console.log(result);
}

getAnExpansionEntityQuery().catch(console.error);
