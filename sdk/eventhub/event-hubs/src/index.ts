// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/// <reference lib="esnext.asynciterable" />

export { EventData, ReceivedEventData } from "./eventData.js";
export { WebSocketImpl } from "rhea-promise";
export { LastEnqueuedEventProperties } from "./partitionReceiver.js";
export { OperationOptions } from "./util/operationOptions.js";
export {
  EventHubClientOptions,
  EventHubConsumerClientOptions,
  LoadBalancingOptions,
  SendBatchOptions,
  CreateBatchOptions,
  GetPartitionIdsOptions,
  GetPartitionPropertiesOptions,
  GetEventHubPropertiesOptions,
} from "./models/public.js";
export { EventHubConsumerClient } from "./eventHubConsumerClient.js";
export { EventHubProducerClient } from "./eventHubProducerClient.js";
export {
  BufferedCloseOptions,
  EventHubBufferedProducerClient,
  EventHubBufferedProducerClientOptions,
  EnqueueEventOptions,
  BufferedFlushOptions,
  OnSendEventsErrorContext,
  OnSendEventsSuccessContext,
} from "./eventHubBufferedProducerClient.js";
export {
  SubscribeOptions,
  Subscription,
  SubscriptionEventHandlers,
  PartitionContext,
  ProcessErrorHandler,
  ProcessInitializeHandler,
  ProcessCloseHandler,
  ProcessEventsHandler,
} from "./eventHubConsumerClientModels.js";
export { EventPosition, latestEventPosition, earliestEventPosition } from "./eventPosition.js";
export { PartitionProperties, EventHubProperties } from "./managementClient.js";
export { EventDataBatch, TryAddOptions } from "./eventDataBatch.js";
export { Checkpoint } from "./partitionProcessor.js";
export { CheckpointStore, PartitionOwnership } from "./eventProcessor.js";
export { CloseReason } from "./models/public.js";
export { MessagingError, RetryOptions, RetryMode, WebSocketOptions } from "@azure/core-amqp";
export { TokenCredential } from "@azure/core-auth";
export { logger } from "./logger.js";
export {
  parseEventHubConnectionString,
  EventHubConnectionStringProperties,
} from "./util/connectionStringUtils.js";

export * from "./eventDataAdapter.js";
