import { ApiErrorResponse } from '../../types/ApiErrorResponse.types';
import { ExternalUrls } from '../../types/ExternalUrls.types';
import { Image } from '../../types/Image.types';

interface GetRecentlyPlayedTracksItemTrackArtist {
  readonly external_urls: ExternalUrls;
  readonly href: string;
  readonly id: string;
  readonly name: string;
  readonly type: 'artist';
  readonly uri: string;
}

interface GetRecentlyPlayedTracksItemTrackAlbum {
  readonly album_type: 'album';
  readonly artists: GetRecentlyPlayedTracksItemTrackArtist[];
  readonly available_markets: string[];
  readonly external_urls: ExternalUrls;
  readonly href: string;
  readonly id: string;
  readonly images: Image[];
  readonly name: string;
  readonly release_date: string;
  readonly release_date_precision: 'day';
  readonly total_tracks: number;
  readonly type: 'album';
  readonly uri: string;
}

export interface GetRecentlyPlayedTracksItemTrack {
  readonly album: GetRecentlyPlayedTracksItemTrackAlbum;
  readonly artists: GetRecentlyPlayedTracksItemTrackArtist[];
  readonly available_markets: string[];
  readonly disc_number: number;
  readonly duration_ms: number;

  readonly explicit: boolean;

  readonly external_ids: {
    readonly isrc: string;
  };
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
  readonly cursors: {
    /**
     * - The cursor to use as key to find the next page of items.
     */
    readonly after: string;
  };
}

export type GetRecentlyPlayedTracksError = ApiErrorResponse;
