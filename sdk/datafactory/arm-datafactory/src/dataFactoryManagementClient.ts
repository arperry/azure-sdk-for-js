/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import {
  PipelineRequest,
  PipelineResponse,
  SendRequest
} from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  FactoriesImpl,
  ExposureControlImpl,
  IntegrationRuntimesImpl,
  IntegrationRuntimeObjectMetadataImpl,
  IntegrationRuntimeNodesImpl,
  LinkedServicesImpl,
  DatasetsImpl,
  PipelinesImpl,
  PipelineRunsImpl,
  ActivityRunsImpl,
  TriggersImpl,
  TriggerRunsImpl,
  DataFlowsImpl,
  DataFlowDebugSessionImpl,
  ManagedVirtualNetworksImpl,
  ManagedPrivateEndpointsImpl,
  CredentialOperationsImpl,
  PrivateEndPointConnectionsImpl,
  PrivateEndpointConnectionImpl,
  PrivateLinkResourcesImpl,
  GlobalParametersImpl
} from "./operations";
import {
  Operations,
  Factories,
  ExposureControl,
  IntegrationRuntimes,
  IntegrationRuntimeObjectMetadata,
  IntegrationRuntimeNodes,
  LinkedServices,
  Datasets,
  Pipelines,
  PipelineRuns,
  ActivityRuns,
  Triggers,
  TriggerRuns,
  DataFlows,
  DataFlowDebugSession,
  ManagedVirtualNetworks,
  ManagedPrivateEndpoints,
  CredentialOperations,
  PrivateEndPointConnections,
  PrivateEndpointConnection,
  PrivateLinkResources,
  GlobalParameters
} from "./operationsInterfaces";
import { DataFactoryManagementClientOptionalParams } from "./models";

export class DataFactoryManagementClient extends coreClient.ServiceClient {
  $host: string;
  apiVersion: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the DataFactoryManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The subscription identifier.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: DataFactoryManagementClientOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: DataFactoryManagementClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-datafactory/11.1.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint:
        options.endpoint ?? options.baseUri ?? "https://management.azure.com"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
    }
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.apiVersion = options.apiVersion || "2018-06-01";
    this.operations = new OperationsImpl(this);
    this.factories = new FactoriesImpl(this);
    this.exposureControl = new ExposureControlImpl(this);
    this.integrationRuntimes = new IntegrationRuntimesImpl(this);
    this.integrationRuntimeObjectMetadata = new IntegrationRuntimeObjectMetadataImpl(
      this
    );
    this.integrationRuntimeNodes = new IntegrationRuntimeNodesImpl(this);
    this.linkedServices = new LinkedServicesImpl(this);
    this.datasets = new DatasetsImpl(this);
    this.pipelines = new PipelinesImpl(this);
    this.pipelineRuns = new PipelineRunsImpl(this);
    this.activityRuns = new ActivityRunsImpl(this);
    this.triggers = new TriggersImpl(this);
    this.triggerRuns = new TriggerRunsImpl(this);
    this.dataFlows = new DataFlowsImpl(this);
    this.dataFlowDebugSession = new DataFlowDebugSessionImpl(this);
    this.managedVirtualNetworks = new ManagedVirtualNetworksImpl(this);
    this.managedPrivateEndpoints = new ManagedPrivateEndpointsImpl(this);
    this.credentialOperations = new CredentialOperationsImpl(this);
    this.privateEndPointConnections = new PrivateEndPointConnectionsImpl(this);
    this.privateEndpointConnection = new PrivateEndpointConnectionImpl(this);
    this.privateLinkResources = new PrivateLinkResourcesImpl(this);
    this.globalParameters = new GlobalParametersImpl(this);
    this.addCustomApiVersionPolicy(options.apiVersion);
  }

  /** A function that adds a policy that sets the api-version (or equivalent) to reflect the library version. */
  private addCustomApiVersionPolicy(apiVersion?: string) {
    if (!apiVersion) {
      return;
    }
    const apiVersionPolicy = {
      name: "CustomApiVersionPolicy",
      async sendRequest(
        request: PipelineRequest,
        next: SendRequest
      ): Promise<PipelineResponse> {
        const param = request.url.split("?");
        if (param.length > 1) {
          const newParams = param[1].split("&").map((item) => {
            if (item.indexOf("api-version") > -1) {
              return "api-version=" + apiVersion;
            } else {
              return item;
            }
          });
          request.url = param[0] + "?" + newParams.join("&");
        }
        return next(request);
      }
    };
    this.pipeline.addPolicy(apiVersionPolicy);
  }

  operations: Operations;
  factories: Factories;
  exposureControl: ExposureControl;
  integrationRuntimes: IntegrationRuntimes;
  integrationRuntimeObjectMetadata: IntegrationRuntimeObjectMetadata;
  integrationRuntimeNodes: IntegrationRuntimeNodes;
  linkedServices: LinkedServices;
  datasets: Datasets;
  pipelines: Pipelines;
  pipelineRuns: PipelineRuns;
  activityRuns: ActivityRuns;
  triggers: Triggers;
  triggerRuns: TriggerRuns;
  dataFlows: DataFlows;
  dataFlowDebugSession: DataFlowDebugSession;
  managedVirtualNetworks: ManagedVirtualNetworks;
  managedPrivateEndpoints: ManagedPrivateEndpoints;
  credentialOperations: CredentialOperations;
  privateEndPointConnections: PrivateEndPointConnections;
  privateEndpointConnection: PrivateEndpointConnection;
  privateLinkResources: PrivateLinkResources;
  globalParameters: GlobalParameters;
}
