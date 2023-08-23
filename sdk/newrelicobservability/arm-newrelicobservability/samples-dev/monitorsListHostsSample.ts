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
  HostsGetRequest,
  NewRelicObservability
} from "@azure/arm-newrelicobservability";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to List the compute vm resources currently being monitored by the NewRelic resource.
 *
 * @summary List the compute vm resources currently being monitored by the NewRelic resource.
 * x-ms-original-file: specification/newrelic/resource-manager/NewRelic.Observability/stable/2022-07-01/examples/Monitors_ListHosts_MaximumSet_Gen.json
 */
async function monitorsListHostsMaximumSetGen() {
  const subscriptionId =
    process.env["NEWRELICOBSERVABILITY_SUBSCRIPTION_ID"] || "ddqonpqwjr";
  const resourceGroupName =
    process.env["NEWRELICOBSERVABILITY_RESOURCE_GROUP"] || "rgopenapi";
  const monitorName = "ipxmlcbonyxtolzejcjshkmlron";
  const request: HostsGetRequest = {
    userEmail: "ruxvg@xqkmdhrnoo.hlmbpm",
    vmIds: ["xzphvxvfmvjrnsgyns"]
  };
  const credential = new DefaultAzureCredential();
  const client = new NewRelicObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listHosts(
    resourceGroupName,
    monitorName,
    request
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List the compute vm resources currently being monitored by the NewRelic resource.
 *
 * @summary List the compute vm resources currently being monitored by the NewRelic resource.
 * x-ms-original-file: specification/newrelic/resource-manager/NewRelic.Observability/stable/2022-07-01/examples/Monitors_ListHosts_MinimumSet_Gen.json
 */
async function monitorsListHostsMinimumSetGen() {
  const subscriptionId =
    process.env["NEWRELICOBSERVABILITY_SUBSCRIPTION_ID"] || "ddqonpqwjr";
  const resourceGroupName =
    process.env["NEWRELICOBSERVABILITY_RESOURCE_GROUP"] || "rgopenapi";
  const monitorName = "ipxmlcbonyxtolzejcjshkmlron";
  const request: HostsGetRequest = {
    userEmail: "ruxvg@xqkmdhrnoo.hlmbpm",
    vmIds: ["xzphvxvfmvjrnsgyns"]
  };
  const credential = new DefaultAzureCredential();
  const client = new NewRelicObservability(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.monitors.listHosts(
    resourceGroupName,
    monitorName,
    request
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  monitorsListHostsMaximumSetGen();
  monitorsListHostsMinimumSetGen();
}

main().catch(console.error);
