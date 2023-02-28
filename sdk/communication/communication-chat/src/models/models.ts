// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { CommunicationIdentifier, CommunicationIdentifierKind } from "@azure/communication-common";
import { ChatError, ChatMessageType } from "../generated/src";

export {
  AddChatParticipantsResult,
  ChatMessageType,
  ChatThreadItem,
  ChatError,
  SendChatMessageResult,
} from "../generated/src/models";

/** Chat thread. */
export interface ChatThreadProperties {
  /** Chat thread id. */
  id: string;
  /** Chat thread topic. */
  topic: string;
  /** The timestamp when the chat thread was created. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  createdOn: Date;
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  readonly createdBy?: CommunicationIdentifierKind;
  /** The timestamp when the chat thread was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
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
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  sender?: CommunicationIdentifierKind;
  /** The timestamp (if applicable) when the message was deleted. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  deletedOn?: Date;
  /** The last timestamp (if applicable) when the message was edited. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  editedOn?: Date;
  /** metadata */
  metadata?: Record<string, string>;
}

/** Content of a chat message. */
export interface ChatMessageContent {
  /** Chat message content for messages of types text or html. */
  message?: string;
  /** Chat message content for messages of type topicUpdated. */
  topic?: string;
  /** Chat message content for messages of types participantAdded or participantRemoved. */
  participants?: ChatParticipant[];
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  initiator?: CommunicationIdentifierKind;
  /** **/
  attachments?: ChatAttachment[];
}

/** A chat message read receipt indicates the time a chat message was read by a recipient. */
export interface ChatMessageReadReceipt {
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  sender: CommunicationIdentifierKind;
  /** Id of the chat message that has been read. This id is generated by the server. */
  chatMessageId: string;
  /** The time at which the message was read. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  readOn: Date;
}

/** A participant of the chat thread. */
export interface ChatParticipant {
  /** Identifies a participant in Azure Communication services. A participant is, for example, a phone number or an Azure communication user. This model must be interpreted as a union: Apart from rawId, at most one further property may be set. */
  id: CommunicationIdentifier;
  /** Display name for the chat participant. */
  displayName?: string;
  /** Time from which the chat history is shared with the participant. The timestamp is in RFC3339 format: `yyyy-MM-ddTHH:mm:ssZ`. */
  shareHistoryTime?: Date;
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

/**
 * Arguments for retrieving the next page of search results.
 */
export interface ListPageSettings {
  /**
   * A token used for retrieving the next page of results when the server
   * enforces pagination.
   */
  continuationToken?: string;
}


/** An attachment in a chat message. */
export interface ChatAttachment {
  /** Id of the attachment */
  id: string;
  /** The type of attachment. */
  attachmentType: AttachmentType;
  /** The type of content of the attachment, if available */
  contentType?: string;
  /** The name of the attachment content. */
  name?: string;
  /** The URL where the attachment can be downloaded */
  url: string;
  /** The URL where the preview of attachment can be downloaded */
  previewUrl?: string;
}

/** Known values of {@link AttachmentType} that the service accepts. */
export enum KnownAttachmentType {
  /** TeamsInlineImage */
  TeamsInlineImage = "teamsInlineImage"
}

/**
 * Defines values for AttachmentType. \
 * {@link KnownAttachmentType} can be used interchangeably with AttachmentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **teamsInlineImage**
 */
export type AttachmentType = string;

/** Known values of {@link ImageSize} that the service accepts. */
export enum KnownImageSize {
  /** Original */
  Original = "original",
  /** Small */
  Small = "small"
}

/**
 * Defines values for ImageSize. \
 * {@link KnownImageSize} can be used interchangeably with ImageSize,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **original** \
 * **small**
 */
export type ImageSize = string;