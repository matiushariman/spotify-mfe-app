import axios, { AxiosInstance, AxiosError, isAxiosError } from 'axios';

import { constructGetUserTopItemsQuery } from './users.utils';
import { API_BASE_URL } from '../../constants';

import type {
  GetCurrentUserProfileResponse,
  GetCurrentUserProfileError,
  GetUserTopItemsRequest,
  GetUserTopItemsError,
} from './users.types';
import type { ApiClassConstructor } from '../../types/ApiClassConstructor.types';

export class UsersApi {
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
   * Get detailed profile information about the current user (including the current user's username)
   *
   * - {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-current-users-profile|API Reference - Get Current User Profile}
   */
  async getCurrentUserProfile() {
    return this.http
      .get<GetCurrentUserProfileResponse>('/me')
      .then((res) => res)
      .catch((err: Error | AxiosError<GetCurrentUserProfileError>) => {
        if (isAxiosError(err)) {
          return Promise.reject(err?.response?.data);
        }

        return Promise.reject(err);
      });
  }

  /**
   * Get the current user's top artists or tracks based on calculated affinity.
   * - {@link https://developer.spotify.com/documentation/web-api/reference/#/operations/get-users-top-artists-and-tracks|API Reference - Get User's Top Items}
   */
  async getUserTopItems({ type, query }: GetUserTopItemsRequest) {
    return this.http
      .get(`/me/top/${type}${constructGetUserTopItemsQuery(query)}`)
      .then((res) => res)
      .catch((err: Error | AxiosError<GetUserTopItemsError>) => {
        if (isAxiosError(err)) {
          return Promise.reject(err?.response?.data);
        }

        return Promise.reject(err);
      });
  }
}
