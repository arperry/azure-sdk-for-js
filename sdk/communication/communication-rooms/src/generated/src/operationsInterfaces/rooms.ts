/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  RoomsCreateOptionalParams,
  RoomsCreateResponse,
  RoomsListOptionalParams,
  RoomsListResponse,
  RoomsGetOptionalParams,
  RoomsGetResponse,
  RoomsUpdateOptionalParams,
  RoomsUpdateResponse,
  RoomsDeleteOptionalParams,
  RoomsListNextOptionalParams,
  RoomsListNextResponse
} from "../models";

/** Interface representing a Rooms. */
export interface Rooms {
  /**
   * Creates a new room.
   * @param options The options parameters.
   */
  create(options?: RoomsCreateOptionalParams): Promise<RoomsCreateResponse>;
  /**
   * Retrieves all created rooms.
   * @param options The options parameters.
   */
  list(options?: RoomsListOptionalParams): Promise<RoomsListResponse>;
  /**
   * Retrieves an existing room by id.
   * @param roomId The id of the room requested.
   * @param options The options parameters.
   */
  get(
    roomId: string,
    options?: RoomsGetOptionalParams
  ): Promise<RoomsGetResponse>;
  /**
   * Update a room with given changes.
   * @param roomId The id of the room requested.
   * @param options The options parameters.
   */
  update(
    roomId: string,
    options?: RoomsUpdateOptionalParams
  ): Promise<RoomsUpdateResponse>;
  /**
   * Delete a room.
   * @param roomId The id of the room to be deleted.
   * @param options The options parameters.
   */
  delete(roomId: string, options?: RoomsDeleteOptionalParams): Promise<void>;
  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  listNext(
    nextLink: string,
    options?: RoomsListNextOptionalParams
  ): Promise<RoomsListNextResponse>;
}
