/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export const LoadBalancerConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LoadBalancerConfiguration",
    modelProperties: {
      privateIpAddress: {
        serializedName: "privateIpAddress",
        type: {
          name: "Composite",
          className: "PrivateIPAddress"
        }
      },
      publicIpAddressResourceId: {
        serializedName: "publicIpAddressResourceId",
        type: {
          name: "String"
        }
      },
      loadBalancerResourceId: {
        serializedName: "loadBalancerResourceId",
        type: {
          name: "String"
        }
      },
      probePort: {
        serializedName: "probePort",
        type: {
          name: "Number"
        }
      },
      sqlVirtualMachineInstances: {
        serializedName: "sqlVirtualMachineInstances",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const PrivateIPAddress: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateIPAddress",
    modelProperties: {
      ipAddress: {
        serializedName: "ipAddress",
        type: {
          name: "String"
        }
      },
      subnetResourceId: {
        serializedName: "subnetResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MultiSubnetIpConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MultiSubnetIpConfiguration",
    modelProperties: {
      privateIpAddress: {
        serializedName: "privateIpAddress",
        type: {
          name: "Composite",
          className: "PrivateIPAddress"
        }
      },
      sqlVirtualMachineInstance: {
        serializedName: "sqlVirtualMachineInstance",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AgConfiguration: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AgConfiguration",
    modelProperties: {
      replicas: {
        serializedName: "replicas",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AgReplica"
            }
          }
        }
      }
    }
  }
};

export const AgReplica: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AgReplica",
    modelProperties: {
      sqlVirtualMachineInstanceId: {
        serializedName: "sqlVirtualMachineInstanceId",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        type: {
          name: "String"
        }
      },
      commit: {
        serializedName: "commit",
        type: {
          name: "String"
        }
      },
      failover: {
        serializedName: "failover",
        type: {
          name: "String"
        }
      },
      readableSecondary: {
        serializedName: "readableSecondary",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SystemData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SystemData",
    modelProperties: {
      createdBy: {
        serializedName: "createdBy",
        type: {
          name: "String"
        }
      },
      createdByType: {
        serializedName: "createdByType",
        type: {
          name: "String"
        }
      },
      createdAt: {
        serializedName: "createdAt",
        type: {
          name: "DateTime"
        }
      },
      lastModifiedBy: {
        serializedName: "lastModifiedBy",
        type: {
          name: "String"
        }
      },
      lastModifiedByType: {
        serializedName: "lastModifiedByType",
        type: {
          name: "String"
        }
      },
      lastModifiedAt: {
        serializedName: "lastModifiedAt",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Resource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorDetail"
        }
      }
    }
  }
};

export const ErrorDetail: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorDetail",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorDetail"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const AvailabilityGroupListenerListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityGroupListenerListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AvailabilityGroupListener"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Dictionary", value: { type: { name: "any" } } }
          }
        }
      }
    }
  }
};

export const OperationDisplay: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WsfcDomainProfile: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WsfcDomainProfile",
    modelProperties: {
      domainFqdn: {
        serializedName: "domainFqdn",
        type: {
          name: "String"
        }
      },
      ouPath: {
        serializedName: "ouPath",
        type: {
          name: "String"
        }
      },
      clusterBootstrapAccount: {
        serializedName: "clusterBootstrapAccount",
        type: {
          name: "String"
        }
      },
      clusterOperatorAccount: {
        serializedName: "clusterOperatorAccount",
        type: {
          name: "String"
        }
      },
      sqlServiceAccount: {
        serializedName: "sqlServiceAccount",
        type: {
          name: "String"
        }
      },
      fileShareWitnessPath: {
        serializedName: "fileShareWitnessPath",
        type: {
          name: "String"
        }
      },
      storageAccountUrl: {
        serializedName: "storageAccountUrl",
        type: {
          name: "String"
        }
      },
      storageAccountPrimaryKey: {
        serializedName: "storageAccountPrimaryKey",
        type: {
          name: "String"
        }
      },
      clusterSubnetType: {
        serializedName: "clusterSubnetType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachineGroupUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachineGroupUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const SqlVirtualMachineGroupListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachineGroupListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SqlVirtualMachineGroup"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachineListResult: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachineListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SqlVirtualMachine"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceIdentity: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ResourceIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const WsfcDomainCredentials: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WsfcDomainCredentials",
    modelProperties: {
      clusterBootstrapAccountPassword: {
        serializedName: "clusterBootstrapAccountPassword",
        type: {
          name: "String"
        }
      },
      clusterOperatorAccountPassword: {
        serializedName: "clusterOperatorAccountPassword",
        type: {
          name: "String"
        }
      },
      sqlServiceAccountPassword: {
        serializedName: "sqlServiceAccountPassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AutoPatchingSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutoPatchingSettings",
    modelProperties: {
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      },
      dayOfWeek: {
        serializedName: "dayOfWeek",
        type: {
          name: "Enum",
          allowedValues: [
            "Everyday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
        }
      },
      maintenanceWindowStartingHour: {
        serializedName: "maintenanceWindowStartingHour",
        type: {
          name: "Number"
        }
      },
      maintenanceWindowDuration: {
        serializedName: "maintenanceWindowDuration",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutoBackupSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutoBackupSettings",
    modelProperties: {
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      },
      enableEncryption: {
        serializedName: "enableEncryption",
        type: {
          name: "Boolean"
        }
      },
      retentionPeriod: {
        serializedName: "retentionPeriod",
        type: {
          name: "Number"
        }
      },
      storageAccountUrl: {
        serializedName: "storageAccountUrl",
        type: {
          name: "String"
        }
      },
      storageContainerName: {
        serializedName: "storageContainerName",
        type: {
          name: "String"
        }
      },
      storageAccessKey: {
        serializedName: "storageAccessKey",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "String"
        }
      },
      backupSystemDbs: {
        serializedName: "backupSystemDbs",
        type: {
          name: "Boolean"
        }
      },
      backupScheduleType: {
        serializedName: "backupScheduleType",
        type: {
          name: "String"
        }
      },
      fullBackupFrequency: {
        serializedName: "fullBackupFrequency",
        type: {
          name: "String"
        }
      },
      daysOfWeek: {
        serializedName: "daysOfWeek",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      fullBackupStartTime: {
        serializedName: "fullBackupStartTime",
        type: {
          name: "Number"
        }
      },
      fullBackupWindowHours: {
        serializedName: "fullBackupWindowHours",
        type: {
          name: "Number"
        }
      },
      logBackupFrequency: {
        serializedName: "logBackupFrequency",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const KeyVaultCredentialSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "KeyVaultCredentialSettings",
    modelProperties: {
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      },
      credentialName: {
        serializedName: "credentialName",
        type: {
          name: "String"
        }
      },
      azureKeyVaultUrl: {
        serializedName: "azureKeyVaultUrl",
        type: {
          name: "String"
        }
      },
      servicePrincipalName: {
        serializedName: "servicePrincipalName",
        type: {
          name: "String"
        }
      },
      servicePrincipalSecret: {
        serializedName: "servicePrincipalSecret",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ServerConfigurationsManagementSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ServerConfigurationsManagementSettings",
    modelProperties: {
      sqlConnectivityUpdateSettings: {
        serializedName: "sqlConnectivityUpdateSettings",
        type: {
          name: "Composite",
          className: "SqlConnectivityUpdateSettings"
        }
      },
      sqlWorkloadTypeUpdateSettings: {
        serializedName: "sqlWorkloadTypeUpdateSettings",
        type: {
          name: "Composite",
          className: "SqlWorkloadTypeUpdateSettings"
        }
      },
      sqlStorageUpdateSettings: {
        serializedName: "sqlStorageUpdateSettings",
        type: {
          name: "Composite",
          className: "SqlStorageUpdateSettings"
        }
      },
      additionalFeaturesServerConfigurations: {
        serializedName: "additionalFeaturesServerConfigurations",
        type: {
          name: "Composite",
          className: "AdditionalFeaturesServerConfigurations"
        }
      },
      sqlInstanceSettings: {
        serializedName: "sqlInstanceSettings",
        type: {
          name: "Composite",
          className: "SQLInstanceSettings"
        }
      },
      azureAdAuthenticationSettings: {
        serializedName: "azureAdAuthenticationSettings",
        type: {
          name: "Composite",
          className: "AADAuthenticationSettings"
        }
      }
    }
  }
};

export const SqlConnectivityUpdateSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlConnectivityUpdateSettings",
    modelProperties: {
      connectivityType: {
        serializedName: "connectivityType",
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "port",
        type: {
          name: "Number"
        }
      },
      sqlAuthUpdateUserName: {
        serializedName: "sqlAuthUpdateUserName",
        type: {
          name: "String"
        }
      },
      sqlAuthUpdatePassword: {
        serializedName: "sqlAuthUpdatePassword",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlWorkloadTypeUpdateSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlWorkloadTypeUpdateSettings",
    modelProperties: {
      sqlWorkloadType: {
        serializedName: "sqlWorkloadType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlStorageUpdateSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlStorageUpdateSettings",
    modelProperties: {
      diskCount: {
        serializedName: "diskCount",
        type: {
          name: "Number"
        }
      },
      startingDeviceId: {
        serializedName: "startingDeviceId",
        type: {
          name: "Number"
        }
      },
      diskConfigurationType: {
        serializedName: "diskConfigurationType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AdditionalFeaturesServerConfigurations: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AdditionalFeaturesServerConfigurations",
    modelProperties: {
      isRServicesEnabled: {
        serializedName: "isRServicesEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SQLInstanceSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SQLInstanceSettings",
    modelProperties: {
      collation: {
        serializedName: "collation",
        type: {
          name: "String"
        }
      },
      maxDop: {
        serializedName: "maxDop",
        type: {
          name: "Number"
        }
      },
      isOptimizeForAdHocWorkloadsEnabled: {
        serializedName: "isOptimizeForAdHocWorkloadsEnabled",
        type: {
          name: "Boolean"
        }
      },
      minServerMemoryMB: {
        serializedName: "minServerMemoryMB",
        type: {
          name: "Number"
        }
      },
      maxServerMemoryMB: {
        serializedName: "maxServerMemoryMB",
        type: {
          name: "Number"
        }
      },
      isLpimEnabled: {
        serializedName: "isLpimEnabled",
        type: {
          name: "Boolean"
        }
      },
      isIfiEnabled: {
        serializedName: "isIfiEnabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AADAuthenticationSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AADAuthenticationSettings",
    modelProperties: {
      clientId: {
        serializedName: "clientId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StorageConfigurationSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StorageConfigurationSettings",
    modelProperties: {
      sqlDataSettings: {
        serializedName: "sqlDataSettings",
        type: {
          name: "Composite",
          className: "SQLStorageSettings"
        }
      },
      sqlLogSettings: {
        serializedName: "sqlLogSettings",
        type: {
          name: "Composite",
          className: "SQLStorageSettings"
        }
      },
      sqlTempDbSettings: {
        serializedName: "sqlTempDbSettings",
        type: {
          name: "Composite",
          className: "SQLTempDbSettings"
        }
      },
      sqlSystemDbOnDataDisk: {
        serializedName: "sqlSystemDbOnDataDisk",
        type: {
          name: "Boolean"
        }
      },
      diskConfigurationType: {
        serializedName: "diskConfigurationType",
        type: {
          name: "String"
        }
      },
      storageWorkloadType: {
        serializedName: "storageWorkloadType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SQLStorageSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SQLStorageSettings",
    modelProperties: {
      luns: {
        serializedName: "luns",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      defaultFilePath: {
        serializedName: "defaultFilePath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SQLTempDbSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SQLTempDbSettings",
    modelProperties: {
      dataFileSize: {
        serializedName: "dataFileSize",
        type: {
          name: "Number"
        }
      },
      dataGrowth: {
        serializedName: "dataGrowth",
        type: {
          name: "Number"
        }
      },
      logFileSize: {
        serializedName: "logFileSize",
        type: {
          name: "Number"
        }
      },
      logGrowth: {
        serializedName: "logGrowth",
        type: {
          name: "Number"
        }
      },
      dataFileCount: {
        serializedName: "dataFileCount",
        type: {
          name: "Number"
        }
      },
      persistFolder: {
        serializedName: "persistFolder",
        type: {
          name: "Boolean"
        }
      },
      persistFolderPath: {
        serializedName: "persistFolderPath",
        type: {
          name: "String"
        }
      },
      luns: {
        serializedName: "luns",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      defaultFilePath: {
        serializedName: "defaultFilePath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TroubleshootingStatus: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TroubleshootingStatus",
    modelProperties: {
      rootCause: {
        serializedName: "rootCause",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      lastTriggerTimeUtc: {
        serializedName: "lastTriggerTimeUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      startTimeUtc: {
        serializedName: "startTimeUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      endTimeUtc: {
        serializedName: "endTimeUtc",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      troubleshootingScenario: {
        serializedName: "troubleshootingScenario",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "TroubleshootingAdditionalProperties"
        }
      }
    }
  }
};

export const TroubleshootingAdditionalProperties: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TroubleshootingAdditionalProperties",
    modelProperties: {
      unhealthyReplicaInfo: {
        serializedName: "unhealthyReplicaInfo",
        type: {
          name: "Composite",
          className: "UnhealthyReplicaInfo"
        }
      }
    }
  }
};

export const UnhealthyReplicaInfo: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UnhealthyReplicaInfo",
    modelProperties: {
      availabilityGroupName: {
        serializedName: "availabilityGroupName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AssessmentSettings: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AssessmentSettings",
    modelProperties: {
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      },
      runImmediately: {
        serializedName: "runImmediately",
        type: {
          name: "Boolean"
        }
      },
      schedule: {
        serializedName: "schedule",
        type: {
          name: "Composite",
          className: "Schedule"
        }
      }
    }
  }
};

export const Schedule: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Schedule",
    modelProperties: {
      enable: {
        serializedName: "enable",
        type: {
          name: "Boolean"
        }
      },
      weeklyInterval: {
        serializedName: "weeklyInterval",
        type: {
          name: "Number"
        }
      },
      monthlyOccurrence: {
        serializedName: "monthlyOccurrence",
        type: {
          name: "Number"
        }
      },
      dayOfWeek: {
        serializedName: "dayOfWeek",
        type: {
          name: "Enum",
          allowedValues: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ]
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachineUpdate: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachineUpdate",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const SqlVmTroubleshooting: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVmTroubleshooting",
    modelProperties: {
      startTimeUtc: {
        serializedName: "startTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      endTimeUtc: {
        serializedName: "endTimeUtc",
        type: {
          name: "DateTime"
        }
      },
      troubleshootingScenario: {
        serializedName: "troubleshootingScenario",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "TroubleshootingAdditionalProperties"
        }
      },
      virtualMachineResourceId: {
        serializedName: "virtualMachineResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const TrackedResource: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const AvailabilityGroupListener: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityGroupListener",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      availabilityGroupName: {
        serializedName: "properties.availabilityGroupName",
        type: {
          name: "String"
        }
      },
      loadBalancerConfigurations: {
        serializedName: "properties.loadBalancerConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LoadBalancerConfiguration"
            }
          }
        }
      },
      multiSubnetIpConfigurations: {
        serializedName: "properties.multiSubnetIpConfigurations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MultiSubnetIpConfiguration"
            }
          }
        }
      },
      createDefaultAvailabilityGroupIfNotExist: {
        serializedName: "properties.createDefaultAvailabilityGroupIfNotExist",
        type: {
          name: "Boolean"
        }
      },
      port: {
        serializedName: "properties.port",
        type: {
          name: "Number"
        }
      },
      availabilityGroupConfiguration: {
        serializedName: "properties.availabilityGroupConfiguration",
        type: {
          name: "Composite",
          className: "AgConfiguration"
        }
      }
    }
  }
};

export const SqlVirtualMachineGroup: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachineGroup",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sqlImageOffer: {
        serializedName: "properties.sqlImageOffer",
        type: {
          name: "String"
        }
      },
      sqlImageSku: {
        serializedName: "properties.sqlImageSku",
        type: {
          name: "String"
        }
      },
      scaleType: {
        serializedName: "properties.scaleType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clusterManagerType: {
        serializedName: "properties.clusterManagerType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      clusterConfiguration: {
        serializedName: "properties.clusterConfiguration",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      wsfcDomainProfile: {
        serializedName: "properties.wsfcDomainProfile",
        type: {
          name: "Composite",
          className: "WsfcDomainProfile"
        }
      }
    }
  }
};

export const SqlVirtualMachine: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachine",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ResourceIdentity"
        }
      },
      systemData: {
        serializedName: "systemData",
        type: {
          name: "Composite",
          className: "SystemData"
        }
      },
      virtualMachineResourceId: {
        serializedName: "properties.virtualMachineResourceId",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sqlImageOffer: {
        serializedName: "properties.sqlImageOffer",
        type: {
          name: "String"
        }
      },
      sqlServerLicenseType: {
        serializedName: "properties.sqlServerLicenseType",
        type: {
          name: "String"
        }
      },
      sqlManagement: {
        serializedName: "properties.sqlManagement",
        type: {
          name: "String"
        }
      },
      leastPrivilegeMode: {
        defaultValue: "NotSet",
        serializedName: "properties.leastPrivilegeMode",
        type: {
          name: "String"
        }
      },
      sqlImageSku: {
        serializedName: "properties.sqlImageSku",
        type: {
          name: "String"
        }
      },
      sqlVirtualMachineGroupResourceId: {
        serializedName: "properties.sqlVirtualMachineGroupResourceId",
        type: {
          name: "String"
        }
      },
      wsfcDomainCredentials: {
        serializedName: "properties.wsfcDomainCredentials",
        type: {
          name: "Composite",
          className: "WsfcDomainCredentials"
        }
      },
      wsfcStaticIp: {
        serializedName: "properties.wsfcStaticIp",
        type: {
          name: "String"
        }
      },
      autoPatchingSettings: {
        serializedName: "properties.autoPatchingSettings",
        type: {
          name: "Composite",
          className: "AutoPatchingSettings"
        }
      },
      autoBackupSettings: {
        serializedName: "properties.autoBackupSettings",
        type: {
          name: "Composite",
          className: "AutoBackupSettings"
        }
      },
      keyVaultCredentialSettings: {
        serializedName: "properties.keyVaultCredentialSettings",
        type: {
          name: "Composite",
          className: "KeyVaultCredentialSettings"
        }
      },
      serverConfigurationsManagementSettings: {
        serializedName: "properties.serverConfigurationsManagementSettings",
        type: {
          name: "Composite",
          className: "ServerConfigurationsManagementSettings"
        }
      },
      storageConfigurationSettings: {
        serializedName: "properties.storageConfigurationSettings",
        type: {
          name: "Composite",
          className: "StorageConfigurationSettings"
        }
      },
      troubleshootingStatus: {
        serializedName: "properties.troubleshootingStatus",
        type: {
          name: "Composite",
          className: "TroubleshootingStatus"
        }
      },
      assessmentSettings: {
        serializedName: "properties.assessmentSettings",
        type: {
          name: "Composite",
          className: "AssessmentSettings"
        }
      },
      enableAutomaticUpgrade: {
        defaultValue: false,
        serializedName: "properties.enableAutomaticUpgrade",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const AvailabilityGroupListenersDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AvailabilityGroupListenersDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachineGroupsDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachineGroupsDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachinesDeleteHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachinesDeleteHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachinesStartAssessmentHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachinesStartAssessmentHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachinesRedeployHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachinesRedeployHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlVirtualMachineTroubleshootTroubleshootHeaders: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlVirtualMachineTroubleshootTroubleshootHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};
