/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ServerBackup,
  BackupsListByServerOptionalParams,
  BackupsGetOptionalParams,
  BackupsGetResponse,
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Backups. */
export interface Backups {
  /**
   * List all the backups for a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param options The options parameters.
   */
  listByServer(
    resourceGroupName: string,
    serverName: string,
    options?: BackupsListByServerOptionalParams,
  ): PagedAsyncIterableIterator<ServerBackup>;
  /**
   * Get specific backup for a given server.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param serverName The name of the server.
   * @param backupName The name of the backup.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    backupName: string,
    options?: BackupsGetOptionalParams,
  ): Promise<BackupsGetResponse>;
}
