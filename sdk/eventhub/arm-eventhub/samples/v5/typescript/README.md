# client library samples for TypeScript

These sample programs show how to use the TypeScript client libraries for in some common scenarios.

| **File Name**                                                                                                 | **Description**                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [clustersCreateOrUpdateSample.ts][clusterscreateorupdatesample]                                               | Creates or updates an instance of an Event Hubs Cluster. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClusterPut.json                                                                                                                          |
| [clustersDeleteSample.ts][clustersdeletesample]                                                               | Deletes an existing Event Hubs Cluster. This operation is idempotent. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClusterDelete.json                                                                                                          |
| [clustersGetSample.ts][clustersgetsample]                                                                     | Gets the resource description of the specified Event Hubs Cluster. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClusterGet.json                                                                                                                |
| [clustersListAvailableClusterRegionSample.ts][clusterslistavailableclusterregionsample]                       | List the quantity of available pre-provisioned Event Hubs Clusters, indexed by Azure region. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ListAvailableClustersGet.json                                                                        |
| [clustersListByResourceGroupSample.ts][clusterslistbyresourcegroupsample]                                     | Lists the available Event Hubs Clusters within an ARM resource group x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClustersListByResourceGroup.json                                                                                             |
| [clustersListBySubscriptionSample.ts][clusterslistbysubscriptionsample]                                       | Lists the available Event Hubs Clusters within an ARM resource group x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClustersListBySubscription.json                                                                                              |
| [clustersListNamespacesSample.ts][clusterslistnamespacessample]                                               | List all Event Hubs Namespace IDs in an Event Hubs Dedicated Cluster. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ListNamespacesInClusterGet.json                                                                                             |
| [clustersUpdateSample.ts][clustersupdatesample]                                                               | Modifies mutable properties on the Event Hubs Cluster. This operation is idempotent. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClusterPatch.json                                                                                            |
| [configurationGetSample.ts][configurationgetsample]                                                           | Get all Event Hubs Cluster settings - a collection of key/value pairs which represent the quotas and settings imposed on the cluster. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClusterQuotaConfigurationGet.json                           |
| [configurationPatchSample.ts][configurationpatchsample]                                                       | Replace all specified Event Hubs Cluster settings with those contained in the request body. Leaves the settings not specified in the request body unmodified. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/Clusters/ClusterQuotaConfigurationPatch.json |
| [consumerGroupsCreateOrUpdateSample.ts][consumergroupscreateorupdatesample]                                   | Creates or updates an Event Hubs consumer group as a nested resource within a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/ConsumerGroup/EHConsumerGroupCreate.json                                                                          |
| [consumerGroupsDeleteSample.ts][consumergroupsdeletesample]                                                   | Deletes a consumer group from the specified Event Hub and resource group. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/ConsumerGroup/EHConsumerGroupDelete.json                                                                                         |
| [consumerGroupsGetSample.ts][consumergroupsgetsample]                                                         | Gets a description for the specified consumer group. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/ConsumerGroup/EHConsumerGroupGet.json                                                                                                                 |
| [consumerGroupsListByEventHubSample.ts][consumergroupslistbyeventhubsample]                                   | Gets all the consumer groups in a Namespace. An empty feed is returned if no consumer group exists in the Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/ConsumerGroup/EHConsumerGroupListByEventHub.json                                      |
| [disasterRecoveryConfigsBreakPairingSample.ts][disasterrecoveryconfigsbreakpairingsample]                     | This operation disables the Disaster Recovery and stops replicating changes from primary to secondary namespaces x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasBreakPairing.json                                          |
| [disasterRecoveryConfigsCheckNameAvailabilitySample.ts][disasterrecoveryconfigschecknameavailabilitysample]   | Check the give Namespace name availability. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasCheckNameAvailability.json                                                                                                      |
| [disasterRecoveryConfigsCreateOrUpdateSample.ts][disasterrecoveryconfigscreateorupdatesample]                 | Creates or updates a new Alias(Disaster Recovery configuration) x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasCreate.json                                                                                                 |
| [disasterRecoveryConfigsDeleteSample.ts][disasterrecoveryconfigsdeletesample]                                 | Deletes an Alias(Disaster Recovery configuration) x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasDelete.json                                                                                                               |
| [disasterRecoveryConfigsFailOverSample.ts][disasterrecoveryconfigsfailoversample]                             | Invokes GEO DR failover and reconfigure the alias to point to the secondary namespace x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasFailOver.json                                                                         |
| [disasterRecoveryConfigsGetAuthorizationRuleSample.ts][disasterrecoveryconfigsgetauthorizationrulesample]     | Gets an AuthorizationRule for a Namespace by rule name. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasAuthorizationRuleGet.json                                                                                           |
| [disasterRecoveryConfigsGetSample.ts][disasterrecoveryconfigsgetsample]                                       | Retrieves Alias(Disaster Recovery configuration) for primary or secondary namespace x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasGet.json                                                                                |
| [disasterRecoveryConfigsListAuthorizationRulesSample.ts][disasterrecoveryconfigslistauthorizationrulessample] | Gets a list of authorization rules for a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasAuthorizationRuleListAll.json                                                                                           |
| [disasterRecoveryConfigsListKeysSample.ts][disasterrecoveryconfigslistkeyssample]                             | Gets the primary and secondary connection strings for the Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasAuthorizationRuleListKey.json                                                                          |
| [disasterRecoveryConfigsListSample.ts][disasterrecoveryconfigslistsample]                                     | Gets all Alias(Disaster Recovery configurations) x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/disasterRecoveryConfigs/EHAliasList.json                                                                                                                  |
| [eventHubsCreateOrUpdateAuthorizationRuleSample.ts][eventhubscreateorupdateauthorizationrulesample]           | Creates or updates an AuthorizationRule for the specified Event Hub. Creation/update of the AuthorizationRule will take a few seconds to take effect. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubAuthorizationRuleCreate.json     |
| [eventHubsCreateOrUpdateSample.ts][eventhubscreateorupdatesample]                                             | Creates or updates a new Event Hub as a nested resource within a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubCreate.json                                                                                                |
| [eventHubsDeleteAuthorizationRuleSample.ts][eventhubsdeleteauthorizationrulesample]                           | Deletes an Event Hub AuthorizationRule. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubAuthorizationRuleDelete.json                                                                                                                   |
| [eventHubsDeleteSample.ts][eventhubsdeletesample]                                                             | Deletes an Event Hub from the specified Namespace and resource group. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubDelete.json                                                                                                      |
| [eventHubsGetAuthorizationRuleSample.ts][eventhubsgetauthorizationrulesample]                                 | Gets an AuthorizationRule for an Event Hub by rule name. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubAuthorizationRuleGet.json                                                                                                     |
| [eventHubsGetSample.ts][eventhubsgetsample]                                                                   | Gets an Event Hubs description for the specified Event Hub. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubGet.json                                                                                                                   |
| [eventHubsListAuthorizationRulesSample.ts][eventhubslistauthorizationrulessample]                             | Gets the authorization rules for an Event Hub. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubAuthorizationRuleListAll.json                                                                                                           |
| [eventHubsListByNamespaceSample.ts][eventhubslistbynamespacesample]                                           | Gets all the Event Hubs in a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubListByNameSpace.json                                                                                                                           |
| [eventHubsListKeysSample.ts][eventhubslistkeyssample]                                                         | Gets the ACS and SAS connection strings for the Event Hub. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubAuthorizationRuleListKey.json                                                                                               |
| [eventHubsRegenerateKeysSample.ts][eventhubsregeneratekeyssample]                                             | Regenerates the ACS and SAS connection strings for the Event Hub. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EventHubs/EHEventHubAuthorizationRuleRegenerateKey.json                                                                                  |
| [namespacesCheckNameAvailabilitySample.ts][namespaceschecknameavailabilitysample]                             | Check the give Namespace name availability. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceCheckNameAvailability.json                                                                                                               |
| [namespacesCreateOrUpdateAuthorizationRuleSample.ts][namespacescreateorupdateauthorizationrulesample]         | Creates or updates an AuthorizationRule for a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceAuthorizationRuleCreate.json                                                                                                |
| [namespacesCreateOrUpdateNetworkRuleSetSample.ts][namespacescreateorupdatenetworkrulesetsample]               | Create or update NetworkRuleSet for a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/VirtualNetworkRule/EHNetworkRuleSetCreate.json                                                                                                 |
| [namespacesCreateOrUpdateSample.ts][namespacescreateorupdatesample]                                           | Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceCreate.json                                             |
| [namespacesDeleteAuthorizationRuleSample.ts][namespacesdeleteauthorizationrulesample]                         | Deletes an AuthorizationRule for a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceAuthorizationRuleDelete.json                                                                                                           |
| [namespacesDeleteSample.ts][namespacesdeletesample]                                                           | Deletes an existing namespace. This operation also removes all associated resources under the namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceDelete.json                                                                 |
| [namespacesGetAuthorizationRuleSample.ts][namespacesgetauthorizationrulesample]                               | Gets an AuthorizationRule for a Namespace by rule name. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceAuthorizationRuleGet.json                                                                                                    |
| [namespacesGetNetworkRuleSetSample.ts][namespacesgetnetworkrulesetsample]                                     | Gets NetworkRuleSet for a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/VirtualNetworkRule/EHNetworkRuleSetGet.json                                                                                                                |
| [namespacesGetSample.ts][namespacesgetsample]                                                                 | Gets the description of the specified namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceGet.json                                                                                                                            |
| [namespacesListAuthorizationRulesSample.ts][namespaceslistauthorizationrulessample]                           | Gets a list of authorization rules for a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceAuthorizationRuleListAll.json                                                                                                    |
| [namespacesListByResourceGroupSample.ts][namespaceslistbyresourcegroupsample]                                 | Lists the available Namespaces within a resource group. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceListByResourceGroup.json                                                                                                     |
| [namespacesListKeysSample.ts][namespaceslistkeyssample]                                                       | Gets the primary and secondary connection strings for the Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceAuthorizationRuleListKey.json                                                                                   |
| [namespacesListNetworkRuleSetSample.ts][namespaceslistnetworkrulesetsample]                                   | Gets NetworkRuleSet for a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/VirtualNetworkRule/EHNetworkRuleSetList.json                                                                                                               |
| [namespacesListSample.ts][namespaceslistsample]                                                               | Lists all the available Namespaces within a subscription, irrespective of the resource groups. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceList.json                                                                             |
| [namespacesRegenerateKeysSample.ts][namespacesregeneratekeyssample]                                           | Regenerates the primary or secondary connection strings for the specified Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceAuthorizationRuleRegenerateKey.json                                                             |
| [namespacesUpdateSample.ts][namespacesupdatesample]                                                           | Creates or updates a namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/EHNameSpaceUpdate.json                                             |
| [operationsListSample.ts][operationslistsample]                                                               | Lists all of the available Event Hub REST API operations. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/EHOperations_List.json                                                                                                                           |
| [privateEndpointConnectionsCreateOrUpdateSample.ts][privateendpointconnectionscreateorupdatesample]           | Creates or updates PrivateEndpointConnections of service namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/PrivateEndPointConnectionCreate.json                                                                                        |
| [privateEndpointConnectionsDeleteSample.ts][privateendpointconnectionsdeletesample]                           | Deletes an existing namespace. This operation also removes all associated resources under the namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/PrivateEndPointConnectionDelete.json                                                   |
| [privateEndpointConnectionsGetSample.ts][privateendpointconnectionsgetsample]                                 | Gets a description for the specified Private Endpoint Connection name. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/PrivateEndPointConnectionGet.json                                                                                        |
| [privateEndpointConnectionsListSample.ts][privateendpointconnectionslistsample]                               | Gets the available PrivateEndpointConnections within a namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/PrivateEndPointConnectionList.json                                                                                            |
| [privateLinkResourcesGetSample.ts][privatelinkresourcesgetsample]                                             | Gets lists of resources that supports Privatelinks. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/NameSpaces/PrivateLinkResourcesGet.json                                                                                                                |
| [schemaRegistryCreateOrUpdateSample.ts][schemaregistrycreateorupdatesample]                                   | x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/SchemaRegistry/SchemaRegistryCreate.json                                                                                                                                                                   |
| [schemaRegistryDeleteSample.ts][schemaregistrydeletesample]                                                   | x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/SchemaRegistry/SchemaRegistryDelete.json                                                                                                                                                                   |
| [schemaRegistryGetSample.ts][schemaregistrygetsample]                                                         | x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/SchemaRegistry/SchemaRegistryGet.json                                                                                                                                                                      |
| [schemaRegistryListByNamespaceSample.ts][schemaregistrylistbynamespacesample]                                 | Gets all the Schema Groups in a Namespace. x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2021-11-01/examples/SchemaRegistry/SchemaRegistryListByNamespace.json                                                                                                               |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs.

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/clustersCreateOrUpdateSample.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx cross-env  node dist/clustersCreateOrUpdateSample.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[clusterscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/clustersCreateOrUpdateSample.ts
[clustersdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/clustersDeleteSample.ts
[clustersgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/clustersGetSample.ts
[clusterslistavailableclusterregionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/clustersListAvailableClusterRegionSample.ts
[clusterslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/clustersListByResourceGroupSample.ts
[clusterslistbysubscriptionsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/clustersListBySubscriptionSample.ts
[clusterslistnamespacessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/clustersListNamespacesSample.ts
[clustersupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/clustersUpdateSample.ts
[configurationgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/configurationGetSample.ts
[configurationpatchsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/configurationPatchSample.ts
[consumergroupscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/consumerGroupsCreateOrUpdateSample.ts
[consumergroupsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/consumerGroupsDeleteSample.ts
[consumergroupsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/consumerGroupsGetSample.ts
[consumergroupslistbyeventhubsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/consumerGroupsListByEventHubSample.ts
[disasterrecoveryconfigsbreakpairingsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsBreakPairingSample.ts
[disasterrecoveryconfigschecknameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsCheckNameAvailabilitySample.ts
[disasterrecoveryconfigscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsCreateOrUpdateSample.ts
[disasterrecoveryconfigsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsDeleteSample.ts
[disasterrecoveryconfigsfailoversample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsFailOverSample.ts
[disasterrecoveryconfigsgetauthorizationrulesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsGetAuthorizationRuleSample.ts
[disasterrecoveryconfigsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsGetSample.ts
[disasterrecoveryconfigslistauthorizationrulessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsListAuthorizationRulesSample.ts
[disasterrecoveryconfigslistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsListKeysSample.ts
[disasterrecoveryconfigslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/disasterRecoveryConfigsListSample.ts
[eventhubscreateorupdateauthorizationrulesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsCreateOrUpdateAuthorizationRuleSample.ts
[eventhubscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsCreateOrUpdateSample.ts
[eventhubsdeleteauthorizationrulesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsDeleteAuthorizationRuleSample.ts
[eventhubsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsDeleteSample.ts
[eventhubsgetauthorizationrulesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsGetAuthorizationRuleSample.ts
[eventhubsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsGetSample.ts
[eventhubslistauthorizationrulessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsListAuthorizationRulesSample.ts
[eventhubslistbynamespacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsListByNamespaceSample.ts
[eventhubslistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsListKeysSample.ts
[eventhubsregeneratekeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/eventHubsRegenerateKeysSample.ts
[namespaceschecknameavailabilitysample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesCheckNameAvailabilitySample.ts
[namespacescreateorupdateauthorizationrulesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesCreateOrUpdateAuthorizationRuleSample.ts
[namespacescreateorupdatenetworkrulesetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesCreateOrUpdateNetworkRuleSetSample.ts
[namespacescreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesCreateOrUpdateSample.ts
[namespacesdeleteauthorizationrulesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesDeleteAuthorizationRuleSample.ts
[namespacesdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesDeleteSample.ts
[namespacesgetauthorizationrulesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesGetAuthorizationRuleSample.ts
[namespacesgetnetworkrulesetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesGetNetworkRuleSetSample.ts
[namespacesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesGetSample.ts
[namespaceslistauthorizationrulessample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesListAuthorizationRulesSample.ts
[namespaceslistbyresourcegroupsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesListByResourceGroupSample.ts
[namespaceslistkeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesListKeysSample.ts
[namespaceslistnetworkrulesetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesListNetworkRuleSetSample.ts
[namespaceslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesListSample.ts
[namespacesregeneratekeyssample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesRegenerateKeysSample.ts
[namespacesupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/namespacesUpdateSample.ts
[operationslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/operationsListSample.ts
[privateendpointconnectionscreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/privateEndpointConnectionsCreateOrUpdateSample.ts
[privateendpointconnectionsdeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/privateEndpointConnectionsDeleteSample.ts
[privateendpointconnectionsgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/privateEndpointConnectionsGetSample.ts
[privateendpointconnectionslistsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/privateEndpointConnectionsListSample.ts
[privatelinkresourcesgetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/privateLinkResourcesGetSample.ts
[schemaregistrycreateorupdatesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/schemaRegistryCreateOrUpdateSample.ts
[schemaregistrydeletesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/schemaRegistryDeleteSample.ts
[schemaregistrygetsample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/schemaRegistryGetSample.ts
[schemaregistrylistbynamespacesample]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/eventhub/arm-eventhub/samples/v5/typescript/src/schemaRegistryListByNamespaceSample.ts
[apiref]: https://docs.microsoft.com/javascript/api/@azure/arm-eventhub?view=azure-node-preview
[freesub]: https://azure.microsoft.com/free/
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/eventhub/arm-eventhub/README.md
[typescript]: https://www.typescriptlang.org/docs/home.html