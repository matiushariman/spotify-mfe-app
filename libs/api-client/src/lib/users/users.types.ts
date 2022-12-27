import type { ApiErrorResponse } from '../../types/ApiErrorResponse.types';
import type { ExternalUrls } from '../../types/ExternalUrls.types';
import type { Image } from '../../types/Image.types';
import type { Album } from '../../types/Album.types';
import type { Artist } from '../../types/Artist.types';
import type { ExternalIds } from '../../types/ExternalIds.types';
import type { Cursors } from '../../types/Cursors.types';
import type { Followers } from '../../types/Followers.types';

/**
 * - {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile|API Reference - Get Current User Profile}
 */
export interface GetCurrentUserProfileResponse {
  /**
   * - The country of the users, as set in the users's account profile. An ISO 3166-1 alpha-2 country code.
   * - This field is only available when the current users has granted access to the users-read-private scope.
   */
  readonly country?: string;
  /**
   * - The name displayed on the users's profile. null if not available.
   */
  readonly display_name: string | null;
  /**
   * - The user's email address, as entered by the user when creating their account.
   * - This field is only available when the current users has granted access to the users-read-private scope.
   */
  readonly email?: string;
  /**
   * - The users's explicit content settings.
   * - This field is only available when the current users has granted access to the users-read-private scope.
   */
  readonly explicit_content?: {
    /**
     * - When true, indicates that explicit content should not be played.
     */
    filter_enabled: boolean;
    /**
     * - When true, indicates that the explicit content setting is locked and can't be changed by the users.
     */
    filter_locked: boolean;
  };
  /**
   * - Known external URLs for this users.
   */
  readonly external_urls: ExternalUrls;
  /**
   * - Information about the followers of the users.
   */
  readonly followers: Followers;
  /**
   * - A link to the Web API endpoint for this users.
   */
  readonly href: string;
  /**
   * - The Spotify users ID for the users.
   */
  readonly id: string;
  /**
   * - The users's profile image.
   */
  readonly images: Image[];
  /**
   * - The users's Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".)
   * - This field is only available when the current users has granted access to the users-read-private scope.
   */
  readonly product: 'open' | 'free' | 'premium';
  /**
   * - The object type: "users"
   */
  readonly type: 'user';
  /**
   * - The Spotify URI for the users.
   */
  readonly uri: string;
}

export type GetCurrentUserProfileError = ApiErrorResponse;

export interface GetUserTopItemsRequest {
  /**
   * - The type of entity to return. Valid values: artists or tracks
   */
  readonly type: 'artists' | 'tracks';
  readonly query?: {
    /**
     * - The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50.
     */
    readonly limit: number;
  };
}

export interface UserTopTracks {
  readonly album: Album;
  readonly artists: Artist[];

  readonly available_markets: string[];
  readonly disc_number: number;
  readonly duration_ms: number;
  readonly explicit: boolean;
  readonly external_ids: ExternalIds;
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

/**
 * - {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks|API Reference - Get User's Top Items}
 */
export interface GetUserTopItemsResponse {
  readonly items: UserTopTracks[];
  /**
   * - A link to the Web API endpoint returning the full result of the request
   */
  readonly href: string;
  /**
   * - The maximum number of items in the response (as set in the query or by default).
   */
  readonly limit: number;
  /**
   * - URL to the next page of items. ( `null` if none)
   */
  readonly next: string | null;
  /**
   * - The offset of the items returned (as set in the query or by default)
   */
  readonly offset: number;
  /**
   * - URL to the previous page of items. ( `null` if none)
   */
  readonly previous: string | null;
  /**
   * - The total number of items available to return.
   */
  readonly total: number;
}

export type GetUserTopItemsError = ApiErrorResponse;

interface FollowedArtist {
  readonly name: string;
  readonly popularity: number;
  readonly type: 'artist';
  readonly uri: string;
  readonly href: string;
  readonly id: string;
  readonly external_urls: ExternalUrls;
  readonly followers: Followers;

  readonly genres: string[];

  readonly images: Image[];
}
export interface GetFollowedArtistsResponse {
  readonly artists: {
    /**
     * - A link to the Web API endpoint returning the full result of the request.
     */
    readonly href: string;
    /**
     * - The maximum number of items in the response (as set in the query or by default).
     */
    readonly limit: number;
    /**
     * - URL to the next page of items. ( `null` if none)
     */
    readonly next: string | null;

    readonly cursors: Cursors;
    /**
     * - The total number of items available to return.
     */
    readonly total: number;

    readonly items: FollowedArtist[];
  };
}

export type GetFollowedArtistsError = ApiErrorResponse;
