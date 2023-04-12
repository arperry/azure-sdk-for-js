/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureReservationAPI } = require("@azure/arm-reservations");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Calculate price for placing a `ReservationOrder`.
 *
 * @summary Calculate price for placing a `ReservationOrder`.
 * x-ms-original-file: specification/reservations/resource-manager/Microsoft.Capacity/stable/2022-11-01/examples/CalculateReservationOrder.json
 */
async function calculatePrice() {
  const body = {
    appliedScopeType: "Shared",
    appliedScopes: [],
    billingPlan: "Monthly",
    billingScopeId: "/subscriptions/ed3a1871-612d-abcd-a849-c2542a68be83",
    displayName: "TestReservationOrder",
    location: "westus",
    quantity: 1,
    reservedResourceProperties: { instanceFlexibility: "On" },
    reservedResourceType: "VirtualMachines",
    sku: { name: "standard_D1" },
    term: "P1Y",
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureReservationAPI(credential);
  const result = await client.reservationOrder.calculate(body);
  console.log(result);
}

async function main() {
  calculatePrice();
}

main().catch(console.error);