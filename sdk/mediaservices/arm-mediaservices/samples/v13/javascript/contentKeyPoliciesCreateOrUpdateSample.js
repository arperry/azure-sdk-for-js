/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Create or update a Content Key Policy in the Media Services account
 *
 * @summary Create or update a Content Key Policy in the Media Services account
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/content-key-policies-create-nodrm-token.json
 */
async function createsAContentKeyPolicyWithClearKeyOptionAndTokenRestriction() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const contentKeyPolicyName = "PolicyWithClearKeyOptionAndSwtTokenRestriction";
  const parameters = {
    description: "ArmPolicyDescription",
    options: [
      {
        name: "ClearKeyOption",
        configuration: {
          odataType: "#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration",
        },
        restriction: {
          odataType: "#Microsoft.Media.ContentKeyPolicyTokenRestriction",
          audience: "urn:audience",
          issuer: "urn:issuer",
          primaryVerificationKey: {
            odataType: "#Microsoft.Media.ContentKeyPolicySymmetricTokenKey",
            keyValue: Buffer.from("AAAAAAAAAAAAAAAAAAAAAA=="),
          },
          restrictionTokenType: "Swt",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.contentKeyPolicies.createOrUpdate(
    resourceGroupName,
    accountName,
    contentKeyPolicyName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Content Key Policy in the Media Services account
 *
 * @summary Create or update a Content Key Policy in the Media Services account
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/content-key-policies-create-playready-open.json
 */
async function createsAContentKeyPolicyWithPlayReadyOptionAndOpenRestriction() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const contentKeyPolicyName = "PolicyWithPlayReadyOptionAndOpenRestriction";
  const parameters = {
    description: "ArmPolicyDescription",
    options: [
      {
        name: "ArmPolicyOptionName",
        configuration: {
          odataType: "#Microsoft.Media.ContentKeyPolicyPlayReadyConfiguration",
          licenses: [
            {
              allowTestDevices: true,
              beginDate: new Date("2017-10-16T18:22:53.46Z"),
              contentKeyLocation: {
                odataType:
                  "#Microsoft.Media.ContentKeyPolicyPlayReadyContentEncryptionKeyFromHeader",
              },
              contentType: "UltraVioletDownload",
              licenseType: "Persistent",
              playRight: {
                allowPassingVideoContentToUnknownOutput: "NotAllowed",
                digitalVideoOnlyContentRestriction: false,
                imageConstraintForAnalogComponentVideoRestriction: true,
                imageConstraintForAnalogComputerMonitorRestriction: false,
                scmsRestriction: 2,
              },
              securityLevel: "SL150",
            },
          ],
        },
        restriction: {
          odataType: "#Microsoft.Media.ContentKeyPolicyOpenRestriction",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.contentKeyPolicies.createOrUpdate(
    resourceGroupName,
    accountName,
    contentKeyPolicyName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Content Key Policy in the Media Services account
 *
 * @summary Create or update a Content Key Policy in the Media Services account
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/content-key-policies-create-widevine-token.json
 */
async function createsAContentKeyPolicyWithWidevineOptionAndTokenRestriction() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const contentKeyPolicyName = "PolicyWithWidevineOptionAndJwtTokenRestriction";
  const parameters = {
    description: "ArmPolicyDescription",
    options: [
      {
        name: "widevineoption",
        configuration: {
          odataType: "#Microsoft.Media.ContentKeyPolicyWidevineConfiguration",
          widevineTemplate:
            '{"allowed_track_types":"SD_HD","content_key_specs":[{"track_type":"SD","security_level":1,"required_output_protection":{"hdcp":"HDCP_V2"}}],"policy_overrides":{"can_play":true,"can_persist":true,"can_renew":false}}',
        },
        restriction: {
          odataType: "#Microsoft.Media.ContentKeyPolicyTokenRestriction",
          alternateVerificationKeys: [
            {
              odataType: "#Microsoft.Media.ContentKeyPolicySymmetricTokenKey",
              keyValue: Buffer.from("AAAAAAAAAAAAAAAAAAAAAA=="),
            },
          ],
          audience: "urn:audience",
          issuer: "urn:issuer",
          primaryVerificationKey: {
            odataType: "#Microsoft.Media.ContentKeyPolicyRsaTokenKey",
            exponent: Buffer.from("AQAB"),
            modulus: Buffer.from("AQAD"),
          },
          restrictionTokenType: "Jwt",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.contentKeyPolicies.createOrUpdate(
    resourceGroupName,
    accountName,
    contentKeyPolicyName,
    parameters
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a Content Key Policy in the Media Services account
 *
 * @summary Create or update a Content Key Policy in the Media Services account
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/content-key-policies-create-multiple-options.json
 */
async function createsAContentKeyPolicyWithMultipleOptions() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const contentKeyPolicyName = "PolicyCreatedWithMultipleOptions";
  const parameters = {
    description: "ArmPolicyDescription",
    options: [
      {
        name: "ClearKeyOption",
        configuration: {
          odataType: "#Microsoft.Media.ContentKeyPolicyClearKeyConfiguration",
        },
        restriction: {
          odataType: "#Microsoft.Media.ContentKeyPolicyTokenRestriction",
          audience: "urn:audience",
          issuer: "urn:issuer",
          primaryVerificationKey: {
            odataType: "#Microsoft.Media.ContentKeyPolicySymmetricTokenKey",
            keyValue: Buffer.from("AAAAAAAAAAAAAAAAAAAAAA=="),
          },
          restrictionTokenType: "Swt",
        },
      },
      {
        name: "widevineoption",
        configuration: {
          odataType: "#Microsoft.Media.ContentKeyPolicyWidevineConfiguration",
          widevineTemplate:
            '{"allowed_track_types":"SD_HD","content_key_specs":[{"track_type":"SD","security_level":1,"required_output_protection":{"hdcp":"HDCP_V2"}}],"policy_overrides":{"can_play":true,"can_persist":true,"can_renew":false}}',
        },
        restriction: {
          odataType: "#Microsoft.Media.ContentKeyPolicyOpenRestriction",
        },
      },
    ],
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.contentKeyPolicies.createOrUpdate(
    resourceGroupName,
    accountName,
    contentKeyPolicyName,
    parameters
  );
  console.log(result);
}

async function main() {
  createsAContentKeyPolicyWithClearKeyOptionAndTokenRestriction();
  createsAContentKeyPolicyWithPlayReadyOptionAndOpenRestriction();
  createsAContentKeyPolicyWithWidevineOptionAndTokenRestriction();
  createsAContentKeyPolicyWithMultipleOptions();
}

main().catch(console.error);
