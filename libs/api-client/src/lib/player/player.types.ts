import { ApiErrorResponse } from '../../types/ApiErrorResponse.types';

export interface GetRecentlyPlayedTracksResponse {
  /**
   * - A link to the Web API endpoint returning the full result of the request.
   */
  readonly href: string;
  /**
   * - The requested data.
   */
  readonly items: string[];
  /**
   * - The maximum number of items in the response (as set in the query or by default).
   */
  readonly limit: number;
  /**
   * - URL to the next page of items. ( `null` if none)
   */
  readonly next: string | null;
  /**
   * - The cursors used to find the next set of items.
   */
  readonly cursors: {
    /**
     * - The cursor to use as key to find the next page of items.
     */
    readonly after: string;
  };
  /**
   * - The total number of items available to return.
   */
  readonly total: number;
}

export type GetRecentlyPlayedTracksError = ApiErrorResponse;
