/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  TrafficController as TrafficControllerMapper,
  TrafficControllerUpdate as TrafficControllerUpdateMapper,
  Association as AssociationMapper,
  AssociationUpdate as AssociationUpdateMapper,
  Frontend as FrontendMapper,
  FrontendUpdate as FrontendUpdateMapper
} from "../models/mappers";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String"
    }
  }
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-05-01-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    constraints: {
      MinLength: 1
    },
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const trafficControllerName: OperationURLParameter = {
  parameterPath: "trafficControllerName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[A-Za-z0-9]+[A-Za-z0-9-_.]{0,62}[A-Za-z0-9_]+")
    },
    serializedName: "trafficControllerName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String"
    }
  }
};

export const resource: OperationParameter = {
  parameterPath: "resource",
  mapper: TrafficControllerMapper
};

export const properties: OperationParameter = {
  parameterPath: "properties",
  mapper: TrafficControllerUpdateMapper
};

export const associationName: OperationURLParameter = {
  parameterPath: "associationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[A-Za-z0-9]+[A-Za-z0-9-_.]{0,62}[A-Za-z0-9_]+")
    },
    serializedName: "associationName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resource1: OperationParameter = {
  parameterPath: "resource",
  mapper: AssociationMapper
};

export const properties1: OperationParameter = {
  parameterPath: "properties",
  mapper: AssociationUpdateMapper
};

export const frontendName: OperationURLParameter = {
  parameterPath: "frontendName",
  mapper: {
    constraints: {
      Pattern: new RegExp("[A-Za-z0-9]+[A-Za-z0-9-_.]{0,62}[A-Za-z0-9_]+")
    },
    serializedName: "frontendName",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const resource2: OperationParameter = {
  parameterPath: "resource",
  mapper: FrontendMapper
};

export const properties2: OperationParameter = {
  parameterPath: "properties",
  mapper: FrontendUpdateMapper
};
