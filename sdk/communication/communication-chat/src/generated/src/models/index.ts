/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type ChatRetentionPolicyUnion =
  | ChatRetentionPolicy
  | ThreadCreationDateRetentionPolicy;

/** A paged collection of chat message read receipts. */
export interface ChatMessageReadReceiptsCollection {
  /** Collection of chat message read receipts. */
  value: ChatMessageReadReceipt[];
  /**
   * If there are more chat message read receipts that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** A chat message read receipt indicates the time a chat message was read by a recipient. */
export interface ChatMessageReadReceipt {
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model is polymorphic: Apart from kind and rawId, at most one further property may be set which must match the kind enum value. */
  senderCommunicationIdentifier: CommunicationIdentifierModel;
  /** Id of the chat message that has been read. This id is generated by the server. */
  chatMessageId: string;
  /** The time at which the message was read. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  readOn: Date;
}

/** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model is polymorphic: Apart from kind and rawId, at most one further property may be set which must match the kind enum value. */
export interface CommunicationIdentifierModel {
  /** The identifier kind. Only required in responses. */
  kind?: CommunicationIdentifierModelKind;
  /** Raw Id of the identifier. Optional in requests, required in responses. */
  rawId?: string;
  /** The communication user. */
  communicationUser?: CommunicationUserIdentifierModel;
  /** The phone number. */
  phoneNumber?: PhoneNumberIdentifierModel;
  /** The Microsoft Teams user. */
  microsoftTeamsUser?: MicrosoftTeamsUserIdentifierModel;
  /** The Microsoft Teams application. */
  microsoftTeamsApp?: MicrosoftTeamsAppIdentifierModel;
}

/** A user that got created with an Azure Communication Services resource. */
export interface CommunicationUserIdentifierModel {
  /** The Id of the communication user. */
  id: string;
}

/** A phone number. */
export interface PhoneNumberIdentifierModel {
  /** The phone number in E.164 format. */
  value: string;
}

/** A Microsoft Teams user. */
export interface MicrosoftTeamsUserIdentifierModel {
  /** The Id of the Microsoft Teams user. If not anonymous, this is the AAD object Id of the user. */
  userId: string;
  /** True if the Microsoft Teams user is anonymous. By default false if missing. */
  isAnonymous?: boolean;
  /** The cloud that the Microsoft Teams user belongs to. By default 'public' if missing. */
  cloud?: CommunicationCloudEnvironmentModel;
}

/** A Microsoft Teams application. */
export interface MicrosoftTeamsAppIdentifierModel {
  /** The Id of the Microsoft Teams application. */
  teamsAppId: string;
  /** The cloud that the Microsoft Teams application belongs to. By default 'public' if missing. */
  cloud?: CommunicationCloudEnvironmentModel;
}

/** The Communication Services error. */
export interface CommunicationErrorResponse {
  /** The Communication Services error. */
  error: ChatError;
}

/** The Communication Services error. */
export interface ChatError {
  /** The error code. */
  code: string;
  /** The error message. */
  message: string;
  /**
   * The error target.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly target?: string;
  /**
   * Further details about specific errors that led to this error.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ChatError[];
  /**
   * The inner error if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly innerError?: ChatError;
}

/** Request payload for sending a read receipt. */
export interface SendReadReceiptRequest {
  /** Id of the latest chat message read by the user. */
  chatMessageId: string;
}

/** Details of the message to send. */
export interface SendChatMessageRequest {
  /** Chat message content. */
  content: string;
  /** The display name of the chat message sender. This property is used to populate sender name for push notifications. */
  senderDisplayName?: string;
  /** The chat message type. */
  type?: ChatMessageType;
  /** Message metadata. */
  metadata?: { [propertyName: string]: string };
  /** The array of attachments */
  attachments?: ChatAttachment[];
}

/** An attachment in a chat message. Currently only supported in Teams Interop scenarios. */
export interface ChatAttachment {
  /** Id of the attachment */
  id: string;
  /** The type of attachment. */
  attachmentType: ChatAttachmentType;
  /** The name of the attachment content. */
  name?: string;
  /** The URL where the attachment can be downloaded */
  url?: string;
  /** The URL where the preview of attachment can be downloaded */
  previewUrl?: string;
}

/** Result of the send message operation. */
export interface SendChatMessageResult {
  /** A server-generated message id. */
  id: string;
}

/** Collection of chat messages for a particular chat thread. */
export interface ChatMessagesCollection {
  /** Collection of chat messages. */
  value: ChatMessage[];
  /**
   * If there are more chat messages that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Chat message. */
export interface ChatMessage {
  /** The id of the chat message. This id is server generated. */
  id: string;
  /** The chat message type. */
  type: ChatMessageType;
  /** Sequence of the chat message in the conversation. */
  sequenceId: string;
  /** Version of the chat message. */
  version: string;
  /** Content of a chat message. */
  content?: ChatMessageContent;
  /** The display name of the chat message sender. This property is used to populate sender name for push notifications. */
  senderDisplayName?: string;
  /** The timestamp when the chat message arrived at the server. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  createdOn: Date;
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model is polymorphic: Apart from kind and rawId, at most one further property may be set which must match the kind enum value. */
  senderCommunicationIdentifier?: CommunicationIdentifierModel;
  /** The timestamp (if applicable) when the message was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /** The last timestamp (if applicable) when the message was edited. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  editedOn?: Date;
  /** Message metadata. */
  metadata?: { [propertyName: string]: string };
}

/** Content of a chat message. */
export interface ChatMessageContent {
  /** Chat message content for messages of types text or html. */
  message?: string;
  /** Chat message content for messages of type topicUpdated. */
  topic?: string;
  /** Chat message content for messages of types participantAdded or participantRemoved. */
  participants?: ChatParticipant[];
  /** List of attachments for this message */
  attachments?: ChatAttachment[];
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model is polymorphic: Apart from kind and rawId, at most one further property may be set which must match the kind enum value. */
  initiatorCommunicationIdentifier?: CommunicationIdentifierModel;
}

/** A participant of the chat thread. */
export interface ChatParticipant {
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model is polymorphic: Apart from kind and rawId, at most one further property may be set which must match the kind enum value. */
  communicationIdentifier: CommunicationIdentifierModel;
  /** Display name for the chat participant. */
  displayName?: string;
  /** Time from which the chat history is shared with the participant. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  shareHistoryTime?: Date;
  /** Contextual metadata for the chat participant. The metadata consists of name/value pairs. The total size of all metadata pairs can be up to 1KB in size. */
  metadata?: { [propertyName: string]: string };
}

/** Request payload for updating a chat message. */
export interface UpdateChatMessageRequest {
  /** Chat message content. */
  content?: string;
  /** Message metadata. */
  metadata?: { [propertyName: string]: string };
  /** The array of attachments */
  attachments?: ChatAttachment[];
}

/** Collection of participants belong to a particular thread. */
export interface ChatParticipantsCollection {
  /** Chat participants. */
  value: ChatParticipant[];
  /**
   * If there are more chat participants that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Participants to be added to the thread. */
export interface AddChatParticipantsRequest {
  /** Participants to add to a chat thread. */
  participants: ChatParticipant[];
}

/** Result of the add chat participants operation. */
export interface AddChatParticipantsResult {
  /**
   * The participants that failed to be added to the chat thread.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invalidParticipants?: ChatError[];
}

/** Request payload for creating a chat thread. */
export interface CreateChatThreadRequest {
  /** The chat thread topic. */
  topic: string;
  /** Participants to be added to the chat thread. */
  participants?: ChatParticipant[];
  /** Contextual metadata for the thread. The metadata consists of name/value pairs. The total size of all metadata pairs can be up to 1KB in size. */
  metadata?: { [propertyName: string]: string };
  /** Data retention policy for auto deletion. */
  retentionPolicy?: ChatRetentionPolicyUnion;
}

/** Data retention policy for auto deletion. */
export interface ChatRetentionPolicy {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "threadCreationDate";
}

/** Result of the create chat thread operation. */
export interface CreateChatThreadResult {
  /** Chat thread. */
  chatThread?: ChatThreadProperties;
  /**
   * The participants that failed to be added to the chat thread.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invalidParticipants?: ChatError[];
}

/** Chat thread. */
export interface ChatThreadProperties {
  /** Chat thread id. */
  id: string;
  /** Chat thread topic. */
  topic: string;
  /** The timestamp when the chat thread was created. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  createdOn: Date;
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model is polymorphic: Apart from kind and rawId, at most one further property may be set which must match the kind enum value. */
  createdByCommunicationIdentifier: CommunicationIdentifierModel;
  /** The timestamp when the chat thread was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /** Contextual metadata for the thread. The metadata consists of name/value pairs. The total size of all metadata pairs can be up to 1KB in size. */
  metadata?: { [propertyName: string]: string };
  /** Data retention policy for auto deletion. */
  retentionPolicy?: ChatRetentionPolicyUnion;
}

/** Collection of chat threads. */
export interface ChatThreadsItemCollection {
  /** Collection of chat threads. */
  value: ChatThreadItem[];
  /**
   * If there are more chat threads that can be retrieved, the next link will be populated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nextLink?: string;
}

/** Summary information of a chat thread. */
export interface ChatThreadItem {
  /** Chat thread id. */
  id: string;
  /** Chat thread topic. */
  topic: string;
  /** The timestamp when the chat thread was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /**
   * The timestamp when the last message arrived at the server. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastMessageReceivedOn?: Date;
}

/** Request payload for updating a chat thread. */
export interface UpdateChatThreadRequest {
  /** Chat thread topic. */
  topic?: string;
  /** Contextual metadata for the thread. The metadata consists of name/value pairs. The total size of all metadata pairs can be up to 1KB in size. */
  metadata?: { [propertyName: string]: string };
  /** Data retention policy for auto deletion. */
  retentionPolicy?: ChatRetentionPolicyUnion;
}

/** Request payload for typing notifications. */
export interface SendTypingNotificationRequest {
  /** The display name of the typing notification sender. This property is used to populate sender name for push notifications. */
  senderDisplayName?: string;
}

/** Result payload for uploading an image. */
export interface UploadChatImageResult {
  /** A server-generated image id. */
  id: string;
  /** The type of attachment. */
  attachmentType?: ChatAttachmentType;
  /** The name including file extension type of the attachment. */
  name?: string;
}

/** Wrapper for error response to follow ARM guidelines. */
export interface ErrorResponse {
  /** The error response. */
  error?: ErrorModel;
}

/** Error response information. */
export interface ErrorModel {
  /** Error code. */
  code: string;
  /** Error message. */
  message: string;
  /** An array of error detail objects. */
  details?: ErrorDetail[];
}

/** Error detail information. */
export interface ErrorDetail {
  /** Error code. */
  code: string;
  /** Error message. */
  message: string;
}

/** Thread retention policy based on thread creation date. */
export interface ThreadCreationDateRetentionPolicy extends ChatRetentionPolicy {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  kind: "threadCreationDate";
  /** Indicates how many days after the thread creation the thread will be deleted. */
  deleteThreadAfterDays: number;
}

/** Known values of {@link CommunicationIdentifierModelKind} that the service accepts. */
export enum KnownCommunicationIdentifierModelKind {
  /** Unknown */
  Unknown = "unknown",
  /** CommunicationUser */
  CommunicationUser = "communicationUser",
  /** PhoneNumber */
  PhoneNumber = "phoneNumber",
  /** MicrosoftTeamsUser */
  MicrosoftTeamsUser = "microsoftTeamsUser",
  /** MicrosoftTeamsApp */
  MicrosoftTeamsApp = "microsoftTeamsApp",
}

/**
 * Defines values for CommunicationIdentifierModelKind. \
 * {@link KnownCommunicationIdentifierModelKind} can be used interchangeably with CommunicationIdentifierModelKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **unknown** \
 * **communicationUser** \
 * **phoneNumber** \
 * **microsoftTeamsUser** \
 * **microsoftTeamsApp**
 */
export type CommunicationIdentifierModelKind = string;

/** Known values of {@link CommunicationCloudEnvironmentModel} that the service accepts. */
export enum KnownCommunicationCloudEnvironmentModel {
  /** Public */
  Public = "public",
  /** Dod */
  Dod = "dod",
  /** Gcch */
  Gcch = "gcch",
}

/**
 * Defines values for CommunicationCloudEnvironmentModel. \
 * {@link KnownCommunicationCloudEnvironmentModel} can be used interchangeably with CommunicationCloudEnvironmentModel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **public** \
 * **dod** \
 * **gcch**
 */
export type CommunicationCloudEnvironmentModel = string;

/** Known values of {@link ImageViewType} that the service accepts. */
export enum KnownImageViewType {
  /** Original */
  Original = "original",
  /** Small */
  Small = "small",
}

/**
 * Defines values for ImageViewType. \
 * {@link KnownImageViewType} can be used interchangeably with ImageViewType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **original** \
 * **small**
 */
export type ImageViewType = string;
/** Defines values for ChatMessageType. */
export type ChatMessageType =
  | "text"
  | "html"
  | "topicUpdated"
  | "participantAdded"
  | "participantRemoved";
/** Defines values for ChatAttachmentType. */
export type ChatAttachmentType = "image" | "file";

/** Optional parameters. */
export interface ChatThreadListChatReadReceiptsOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of chat message read receipts to be returned per page. */
  maxPageSize?: number;
  /** Skips chat message read receipts up to a specified position in response. */
  skip?: number;
}

/** Contains response data for the listChatReadReceipts operation. */
export type ChatThreadListChatReadReceiptsResponse =
  ChatMessageReadReceiptsCollection;

/** Optional parameters. */
export interface ChatThreadSendChatReadReceiptOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadSendChatMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the sendChatMessage operation. */
export type ChatThreadSendChatMessageResponse = SendChatMessageResult;

/** Optional parameters. */
export interface ChatThreadListChatMessagesOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of messages to be returned per page. */
  maxPageSize?: number;
  /** The earliest point in time to get messages after. The timestamp should be in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  startTime?: Date;
}

/** Contains response data for the listChatMessages operation. */
export type ChatThreadListChatMessagesResponse = ChatMessagesCollection;

/** Optional parameters. */
export interface ChatThreadGetChatMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getChatMessage operation. */
export type ChatThreadGetChatMessageResponse = ChatMessage;

/** Optional parameters. */
export interface ChatThreadUpdateChatMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadDeleteChatMessageOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadListChatParticipantsOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of participants to be returned per page. */
  maxPageSize?: number;
  /** Skips participants up to a specified position in response. */
  skip?: number;
}

/** Contains response data for the listChatParticipants operation. */
export type ChatThreadListChatParticipantsResponse = ChatParticipantsCollection;

/** Optional parameters. */
export interface ChatThreadRemoveChatParticipantOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadAddChatParticipantsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addChatParticipants operation. */
export type ChatThreadAddChatParticipantsResponse = AddChatParticipantsResult;

/** Optional parameters. */
export interface ChatThreadUpdateChatThreadPropertiesOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadGetChatThreadPropertiesOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getChatThreadProperties operation. */
export type ChatThreadGetChatThreadPropertiesResponse = ChatThreadProperties;

/** Optional parameters. */
export interface ChatThreadSendTypingNotificationOptionalParams
  extends coreClient.OperationOptions {
  /** Details of the typing notification request. */
  sendTypingNotificationRequest?: SendTypingNotificationRequest;
}

/** Optional parameters. */
export interface ChatThreadUploadChatImageOptionalParams
  extends coreClient.OperationOptions {
  /** The file name of the image. */
  imageFilename?: string;
}

/** Contains response data for the uploadChatImage operation. */
export type ChatThreadUploadChatImageResponse = UploadChatImageResult;

/** Optional parameters. */
export interface ChatThreadGetChatImageOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getChatImage operation. */
export type ChatThreadGetChatImageResponse = {
  /**
   * BROWSER ONLY
   *
   * The response body as a browser Blob.
   * Always `undefined` in node.js.
   */
  blobBody?: Promise<Blob>;
  /**
   * NODEJS ONLY
   *
   * The response body as a node.js Readable stream.
   * Always `undefined` in the browser.
   */
  readableStreamBody?: NodeJS.ReadableStream;
};

/** Optional parameters. */
export interface ChatThreadDeleteChatImageOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatThreadListChatReadReceiptsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChatReadReceiptsNext operation. */
export type ChatThreadListChatReadReceiptsNextResponse =
  ChatMessageReadReceiptsCollection;

/** Optional parameters. */
export interface ChatThreadListChatMessagesNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChatMessagesNext operation. */
export type ChatThreadListChatMessagesNextResponse = ChatMessagesCollection;

/** Optional parameters. */
export interface ChatThreadListChatParticipantsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChatParticipantsNext operation. */
export type ChatThreadListChatParticipantsNextResponse =
  ChatParticipantsCollection;

/** Optional parameters. */
export interface ChatCreateChatThreadOptionalParams
  extends coreClient.OperationOptions {
  /** If specified, the client directs that the request is repeatable; that is, that the client can make the request multiple times with the same Repeatability-Request-Id and get back an appropriate response without the server executing the request multiple times. The value of the Repeatability-Request-Id is an opaque string representing a client-generated, globally unique for all time, identifier for the request. It is recommended to use version 4 (random) UUIDs. */
  repeatabilityRequestId?: string;
}

/** Contains response data for the createChatThread operation. */
export type ChatCreateChatThreadResponse = CreateChatThreadResult;

/** Optional parameters. */
export interface ChatListChatThreadsOptionalParams
  extends coreClient.OperationOptions {
  /** The maximum number of chat threads returned per page. */
  maxPageSize?: number;
  /** The earliest point in time to get chat threads up to. The timestamp should be in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  startTime?: Date;
}

/** Contains response data for the listChatThreads operation. */
export type ChatListChatThreadsResponse = ChatThreadsItemCollection;

/** Optional parameters. */
export interface ChatDeleteChatThreadOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ChatListChatThreadsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listChatThreadsNext operation. */
export type ChatListChatThreadsNextResponse = ChatThreadsItemCollection;

/** Optional parameters. */
export interface ChatApiClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
