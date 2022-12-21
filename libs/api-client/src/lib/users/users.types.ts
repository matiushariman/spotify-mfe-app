import type { ApiErrorResponse } from '../../types/ApiErrorResponse.types';
import type { Image } from '../../types/Images.type';
import type { ExternalUrls } from '../../types/ExternalUrls.types';
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
   * - The users' profile image.
   */
  readonly images: Image[];
  /**
   * - The users' Spotify subscription level: "premium", "free", etc. (The subscription level "open" can be considered the same as "free".)
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
