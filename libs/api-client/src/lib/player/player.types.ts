import type { ApiErrorResponse } from '../../types/ApiErrorResponse.types';
import type { ExternalUrls } from '../../types/ExternalUrls.types';
import type { Artist } from '../../types/Artist.types';
import type { Album } from '../../types/Album.types';
import type { ExternalIds } from '../../types/ExternalIds.types';
import type { Cursors } from '../../types/Cursors.types';

export interface GetRecentlyPlayedTracksItemTrack {
  readonly album: Album;
  readonly artists: Artist[];
  readonly available_markets: string[];
  readonly disc_number: number;
  readonly duration_ms: number;

  readonly explicit: boolean;

  readonly external_ids: ExternalIds;
  /**
   * - Known external URLs for this track.
   */
  readonly external_urls: ExternalUrls;

  readonly href: string;
  readonly id: string;
  readonly is_local: boolean;
  readonly name: string;
  readonly popularity: number;
  readonly preview_url: string;
  readonly track_number: number;
  readonly type: 'track';
  readonly uri: string;
}

interface GetRecentlyPlayedTracksItem {
  readonly track: GetRecentlyPlayedTracksItemTrack;
  readonly played_at: Date | string;
  readonly context: null;
}

export interface GetRecentlyPlayedTracksResponse {
  /**
   * - A link to the Web API endpoint returning the full result of the request.
   */
  readonly href: string;
  /**
   * - The requested data.
   */
  readonly items: GetRecentlyPlayedTracksItem[];
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
  readonly cursors: Cursors;
}

export type GetRecentlyPlayedTracksError = ApiErrorResponse;
