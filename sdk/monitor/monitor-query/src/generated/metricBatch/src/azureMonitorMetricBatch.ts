/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { MetricsBatchImpl } from "./operations";
import { MetricsBatch } from "./operationsInterfaces";
import { AzureMonitorMetricBatchContext } from "./azureMonitorMetricBatchContext";
import {
  AzureMonitorMetricBatchOptionalParams,
  ApiVersion20240201
} from "./models";

/** @internal */
export class AzureMonitorMetricBatch extends AzureMonitorMetricBatchContext {
  /**
   * Initializes a new instance of the AzureMonitorMetricBatch class.
   * @param endpoint The regional endpoint to use, for example https://eastus.metrics.monitor.azure.com.
   *                 The region should match the region of the requested resources. For global resources, the region
   *                 should be 'global'.
   * @param apiVersion Api Version
   * @param options The parameter options
   */
  constructor(
    endpoint: string,
    apiVersion: ApiVersion20240201,
    options?: AzureMonitorMetricBatchOptionalParams
  ) {
    super(endpoint, apiVersion, options);
    this.metricsBatch = new MetricsBatchImpl(this);
  }

  metricsBatch: MetricsBatch;
}
