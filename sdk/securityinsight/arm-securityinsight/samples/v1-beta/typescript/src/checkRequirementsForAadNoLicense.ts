/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Get requirements state for a data connector type.
 *
 * @summary Get requirements state for a data connector type.
 * x-ms-original-file: specification/securityinsights/resource-manager/Microsoft.SecurityInsights/preview/2021-09-01-preview/examples/dataConnectors/CheckRequirementsAzureActiveDirectoryNoLicense.json
 */
import {
  AADCheckRequirements,
  SecurityInsights
} from "@azure/arm-securityinsight";
import { DefaultAzureCredential } from "@azure/identity";

async function checkRequirementsForAadNoLicense() {
  const subscriptionId = "d0cfe6b2-9ac0-4464-9919-dccaee2e48c0";
  const resourceGroupName = "myRg";
  const workspaceName = "myWorkspace";
  const dataConnectorsCheckRequirements: AADCheckRequirements = {
    kind: "AzureActiveDirectory",
    tenantId: "2070ecc9-b4d5-4ae4-adaa-936fa1954fa8"
  };
  const credential = new DefaultAzureCredential();
  const client = new SecurityInsights(credential, subscriptionId);
  const result = await client.dataConnectorsCheckRequirementsOperations.post(
    resourceGroupName,
    workspaceName,
    dataConnectorsCheckRequirements
  );
  console.log(result);
}

checkRequirementsForAadNoLicense().catch(console.error);
