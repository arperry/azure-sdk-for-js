/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  CheckNameAvailabilityInput,
  FrontDoorNameAvailabilityWithSubscriptionCheckOptionalParams,
  FrontDoorNameAvailabilityWithSubscriptionCheckResponse,
} from "../models";

/** Interface representing a FrontDoorNameAvailabilityWithSubscription. */
export interface FrontDoorNameAvailabilityWithSubscription {
  /**
   * Check the availability of a Front Door subdomain.
   * @param checkFrontDoorNameAvailabilityInput Input to check.
   * @param options The options parameters.
   */
  check(
    checkFrontDoorNameAvailabilityInput: CheckNameAvailabilityInput,
    options?: FrontDoorNameAvailabilityWithSubscriptionCheckOptionalParams,
  ): Promise<FrontDoorNameAvailabilityWithSubscriptionCheckResponse>;
}
