/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "./pagingHelper";
import {
  ReservationImpl,
  ReservationOrderImpl,
  OperationImpl,
  CalculateRefundImpl,
  ReturnImpl,
  CalculateExchangeImpl,
  ExchangeImpl,
  QuotaImpl,
  QuotaRequestStatusImpl
} from "./operations";
import {
  Reservation,
  ReservationOrder,
  Operation,
  CalculateRefund,
  Return,
  CalculateExchange,
  Exchange,
  Quota,
  QuotaRequestStatus
} from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  AzureReservationAPIOptionalParams,
  Catalog,
  GetCatalogNextOptionalParams,
  GetCatalogOptionalParams,
  GetCatalogResponse,
  GetAppliedReservationListOptionalParams,
  GetAppliedReservationListResponse,
  GetCatalogNextResponse
} from "./models";

/// <reference lib="esnext.asynciterable" />
export class AzureReservationAPI extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the AzureReservationAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    options?: AzureReservationAPIOptionalParams
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: AzureReservationAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials
    };

    const packageDetails = `azsdk-js-arm-reservations/9.0.1`;
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

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://management.azure.com";
    this.reservation = new ReservationImpl(this);
    this.reservationOrder = new ReservationOrderImpl(this);
    this.operation = new OperationImpl(this);
    this.calculateRefund = new CalculateRefundImpl(this);
    this.return = new ReturnImpl(this);
    this.calculateExchange = new CalculateExchangeImpl(this);
    this.exchange = new ExchangeImpl(this);
    this.quota = new QuotaImpl(this);
    this.quotaRequestStatus = new QuotaRequestStatusImpl(this);
  }

  /**
   * Get the regions and skus that are available for RI purchase for the specified Azure subscription.
   * @param subscriptionId Id of the subscription
   * @param options The options parameters.
   */
  public listCatalog(
    subscriptionId: string,
    options?: GetCatalogOptionalParams
  ): PagedAsyncIterableIterator<Catalog> {
    const iter = this.getCatalogPagingAll(subscriptionId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        if (settings?.maxPageSize) {
          throw new Error("maxPageSize is not supported by this operation.");
        }
        return this.getCatalogPagingPage(subscriptionId, options, settings);
      }
    };
  }

  private async *getCatalogPagingPage(
    subscriptionId: string,
    options?: GetCatalogOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<Catalog[]> {
    let result: GetCatalogResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._getCatalog(subscriptionId, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._getCatalogNext(
        subscriptionId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *getCatalogPagingAll(
    subscriptionId: string,
    options?: GetCatalogOptionalParams
  ): AsyncIterableIterator<Catalog> {
    for await (const page of this.getCatalogPagingPage(
      subscriptionId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the regions and skus that are available for RI purchase for the specified Azure subscription.
   * @param subscriptionId Id of the subscription
   * @param options The options parameters.
   */
  private _getCatalog(
    subscriptionId: string,
    options?: GetCatalogOptionalParams
  ): Promise<GetCatalogResponse> {
    return this.sendOperationRequest(
      { subscriptionId, options },
      getCatalogOperationSpec
    );
  }

  /**
   * Get applicable `Reservation`s that are applied to this subscription or a resource group under this
   * subscription.
   * @param subscriptionId Id of the subscription
   * @param options The options parameters.
   */
  getAppliedReservationList(
    subscriptionId: string,
    options?: GetAppliedReservationListOptionalParams
  ): Promise<GetAppliedReservationListResponse> {
    return this.sendOperationRequest(
      { subscriptionId, options },
      getAppliedReservationListOperationSpec
    );
  }

  /**
   * GetCatalogNext
   * @param subscriptionId Id of the subscription
   * @param nextLink The nextLink from the previous successful call to the GetCatalog method.
   * @param options The options parameters.
   */
  private _getCatalogNext(
    subscriptionId: string,
    nextLink: string,
    options?: GetCatalogNextOptionalParams
  ): Promise<GetCatalogNextResponse> {
    return this.sendOperationRequest(
      { subscriptionId, nextLink, options },
      getCatalogNextOperationSpec
    );
  }

  reservation: Reservation;
  reservationOrder: ReservationOrder;
  operation: Operation;
  calculateRefund: CalculateRefund;
  return: Return;
  calculateExchange: CalculateExchange;
  exchange: Exchange;
  quota: Quota;
  quotaRequestStatus: QuotaRequestStatus;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getCatalogOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Capacity/catalogs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogsResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.reservedResourceType,
    Parameters.location,
    Parameters.publisherId,
    Parameters.offerId,
    Parameters.planId,
    Parameters.skip,
    Parameters.take1
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getAppliedReservationListOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Capacity/appliedReservations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.AppliedReservations
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getCatalogNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CatalogsResult
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
