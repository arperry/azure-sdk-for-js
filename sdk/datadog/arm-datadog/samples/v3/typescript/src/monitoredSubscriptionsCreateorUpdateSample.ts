/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  MonitoredSubscriptionProperties,
  MonitoredSubscriptionsCreateorUpdateOptionalParams,
  MicrosoftDatadogClient
} from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Add the subscriptions that should be monitored by the Datadog monitor resource.
 *
 * @summary Add the subscriptions that should be monitored by the Datadog monitor resource.
 * x-ms-original-file: specification/datadog/resource-manager/Microsoft.Datadog/stable/2023-01-01/examples/MonitoredSubscriptions_CreateorUpdate.json
 */
async function monitorsAddMonitoredSubscriptions() {
  const subscriptionId =
    process.env["DATADOG_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["DATADOG_RESOURCE_GROUP"] || "myResourceGroup";
  const monitorName = "myMonitor";
  const configurationName = "default";
  const body: MonitoredSubscriptionProperties = {
    properties: {
      monitoredSubscriptionList: [
        {
          status: "Active",
          subscriptionId: "/subscriptions/00000000-0000-0000-0000-000000000000",
          tagRules: {
            automuting: true,
            logRules: {
              filteringTags: [
                { name: "Environment", action: "Include", value: "Prod" },
                { name: "Environment", action: "Exclude", value: "Dev" }
              ],
              sendAadLogs: false,
              sendResourceLogs: true,
              sendSubscriptionLogs: true
            },
            metricRules: { filteringTags: [] }
          }
        },
        {
          status: "Failed",
          subscriptionId: "/subscriptions/00000000-0000-0000-0000-000000000001",
          tagRules: {
            automuting: true,
            logRules: {
              filteringTags: [
                { name: "Environment", action: "Include", value: "Prod" },
                { name: "Environment", action: "Exclude", value: "Dev" }
              ],
              sendAadLogs: false,
              sendResourceLogs: true,
              sendSubscriptionLogs: true
            },
            metricRules: { filteringTags: [] }
          }
        }
      ],
      operation: "AddBegin"
    }
  };
  const options: MonitoredSubscriptionsCreateorUpdateOptionalParams = { body };
  const credential = new DefaultAzureCredential();
  const client = new MicrosoftDatadogClient(credential, subscriptionId);
  const result = await client.monitoredSubscriptions.beginCreateorUpdateAndWait(
    resourceGroupName,
    monitorName,
    configurationName,
    options
  );
  console.log(result);
}

async function main() {
  monitorsAddMonitoredSubscriptions();
}

main().catch(console.error);
