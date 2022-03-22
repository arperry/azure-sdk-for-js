/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CheckNameAvailability } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { MySQLManagementFlexibleServerClient } from "../mySQLManagementFlexibleServerClient";
import {
  NameAvailabilityRequest,
  CheckNameAvailabilityExecuteOptionalParams,
  CheckNameAvailabilityExecuteResponse
} from "../models";

/** Class containing CheckNameAvailability operations. */
export class CheckNameAvailabilityImpl implements CheckNameAvailability {
  private readonly client: MySQLManagementFlexibleServerClient;

  /**
   * Initialize a new instance of the class CheckNameAvailability class.
   * @param client Reference to the service client
   */
  constructor(client: MySQLManagementFlexibleServerClient) {
    this.client = client;
  }

  /**
   * Check the availability of name for server
   * @param locationName The name of the location.
   * @param nameAvailabilityRequest The required parameters for checking if server name is available.
   * @param options The options parameters.
   */
  execute(
    locationName: string,
    nameAvailabilityRequest: NameAvailabilityRequest,
    options?: CheckNameAvailabilityExecuteOptionalParams
  ): Promise<CheckNameAvailabilityExecuteResponse> {
    return this.client.sendOperationRequest(
      { locationName, nameAvailabilityRequest, options },
      executeOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const executeOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.DBforMySQL/locations/{locationName}/checkNameAvailability",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.NameAvailability
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  requestBody: Parameters.nameAvailabilityRequest,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
