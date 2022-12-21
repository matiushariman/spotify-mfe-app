import axios, { AxiosInstance, AxiosError, isAxiosError } from 'axios';

import { API_BASE_URL } from '../../constants';

import type { GetCurrentUserPlaylistsResponse } from './playlists.types';
import type { ApiClassConstructor } from '../../types/ApiClassConstructor.types';

export class PlaylistsApi {
  private readonly http: AxiosInstance;

  constructor({ token }: ApiClassConstructor) {
    this.http = axios.create({
      baseURL: `${API_BASE_URL}/v1`,
      headers: {
        'Content-Type': 'application /json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  /**
   * Get a list of the playlists owned or followed by the current Spotify user.
   *
   * - {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-a-list-of-current-users-playlists|API Reference - Get Current User Playlists}
   */
  async getCurrentUserPlaylists() {
    return this.http
      .get<GetCurrentUserPlaylistsResponse>('/me/playlists')
      .then((res) => res)
      .catch((err: Error | AxiosError) => {
        if (isAxiosError(err)) {
          return Promise.reject(err?.response?.data);
        }

        return Promise.reject(err);
      });
  }
}
