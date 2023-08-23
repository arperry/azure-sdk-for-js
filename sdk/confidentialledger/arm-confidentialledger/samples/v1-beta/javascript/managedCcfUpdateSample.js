/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ConfidentialLedgerClient } = require("@azure/arm-confidentialledger");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Updates properties of Managed CCF
 *
 * @summary Updates properties of Managed CCF
 * x-ms-original-file: specification/confidentialledger/resource-manager/Microsoft.ConfidentialLedger/preview/2023-01-26-preview/examples/ManagedCCF_Update.json
 */
async function managedCcfUpdate() {
  const subscriptionId =
    process.env["CONFIDENTIALLEDGER_SUBSCRIPTION_ID"] || "0000000-0000-0000-0000-000000000001";
  const resourceGroupName =
    process.env["CONFIDENTIALLEDGER_RESOURCE_GROUP"] || "DummyResourceGroupName";
  const appName = "DummyMccfAppName";
  const managedCCF = {
    location: "EastUS",
    properties: {
      deploymentType: {
        appSourceUri:
          "https://myaccount.blob.core.windows.net/storage/mccfsource?sv=2022-02-11%st=2022-03-11",
        languageRuntime: "CPP",
      },
    },
    tags: { additionalProps1: "additional properties" },
  };
  const credential = new DefaultAzureCredential();
  const client = new ConfidentialLedgerClient(credential, subscriptionId);
  const result = await client.managedCCFOperations.beginUpdateAndWait(
    resourceGroupName,
    appName,
    managedCCF
  );
  console.log(result);
}

async function main() {
  managedCcfUpdate();
}

main().catch(console.error);
