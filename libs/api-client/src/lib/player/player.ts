import axios, { AxiosInstance, AxiosError, isAxiosError } from 'axios';

import { API_BASE_URL } from '../../constants';

import type {
  GetRecentlyPlayedTracksResponse,
  GetRecentlyPlayedTracksError,
} from './player.types';
import type { ApiClassConstructor } from '../../types/ApiClassConstructor.types';

export class PlayerApi {
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
   * Get tracks from the current user's recently played tracks.
   *
   * - {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-recently-played|API Reference - Get Recently Played Tracks}
   */
  async getRecentlyPlayedTracks() {
    return this.http
      .get<GetRecentlyPlayedTracksResponse>('/me/player/recently-played')
      .then((res) => res)
      .catch((err: Error | AxiosError<GetRecentlyPlayedTracksError>) => {
        if (isAxiosError(err)) {
          return Promise.reject(err?.response?.data);
        }

        return Promise.reject(err);
      });
  }
}
