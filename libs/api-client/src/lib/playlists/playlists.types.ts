import type { Image } from '../../types/Images.type';
import type { ExternalUrls } from '../../types/ExternalUrls.types';
import type { Followers } from '../../types/Followers.types';
import type { ApiErrorResponse } from '../../types/ApiErrorResponse.types';

interface PlaylistItem {
  /**
   * - The name of the playlist.
   */
  readonly name: string;
  /**
   * - true if the owner allows other users to modify the playlist.
   */
  readonly collaborative: boolean;
  /**
   * - The playlist description. Only returned for modified, verified playlists, otherwise null.
   */
  readonly description: string | null;
  /**
   * - Known external URLs for this playlist.
   */
  readonly external_urls: ExternalUrls;
  /**
   * - A link to the Web API endpoint providing full details of the playlist.
   */
  readonly href: string;
  /**
   * - The Spotify ID for the playlist.
   */
  readonly id: string;
  /**
   * - The user who owns the playlist
   */
  readonly owner: {
    /**
     * - Known public external URLs for this user.
     */
    readonly external_urls: ExternalUrls;
    /**
     * - Information about the followers of the users.
     */
    readonly followers: Followers;
    /**
     * - A link to the Web API endpoint for this user.
     */
    readonly href: string;
    /**
     * - The Spotify user ID for this user.
     */
    readonly id: string;
    /**
     * - The object type. Allowed value: "user"
     */
    readonly type: 'user';
    /**
     * - The Spotify URI for this user.
     */
    readonly uri: string;
    /**
     * - The name displayed on the user's profile. null if not available.
     */
    readonly display_name: string | null;
  };
  /**
   * The playlist's public/private status:
   * - `True` the playlist is public
   * - `False` the playlist is private
   * - `null` the playlist status is not relevant
   */
  readonly public: boolean | null;
  /**
   * - The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version
   */
  readonly snapshot_id: string;
  /**
   * - A collection containing a link ( href ) to the Web API endpoint where full details of the playlist's tracks can be retrieved, along with the total number of tracks in the playlist.
   * - Note, a track object may be `null`. This can happen if a track is no longer available.
   */
  readonly tracks: {
    /**
     * - A link to the Web API endpoint where full details of the playlist's tracks can be retrieved.
     */
    readonly href: string;
    /**
     * - Number of tracks in the playlist.
     */
    readonly total: number;
  } | null;
  /**
   * - The object type: "playlist"
   */
  readonly type: 'playlist';
  /**
   * - The Spotify URI for the playlist.
   */
  readonly uri: string;
  /**
   * - Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order.
   */
  readonly images: Image[];
}

export interface GetCurrentUserPlaylistsResponse {
  /**
   * - The requested content
   */
  readonly items: PlaylistItem[];
  /**
   * - A link to the Web API endpoint returning the full result of the request
   */
  readonly href: string;
  /**
   * - The maximum number of items in the response (as set in the query or by default).
   */
  readonly limit: number;
  /**
   * - URL to the next page of items. ( null if none)
   */
  readonly next: string | null;
  /**
   * - The offset of the items returned (as set in the query or by default)
   */
  readonly offset: number;
  /**
   * - URL to the previous page of items. ( null if none)
   */
  readonly previous: string;
  /**
   * - The total number of items available to return.
   */
  readonly total: number;
}

export type GetCurrentUserPlaylistsError = ApiErrorResponse;
