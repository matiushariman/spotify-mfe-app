import axios, { AxiosInstance, AxiosError, isAxiosError } from 'axios';

import { API_BASE_URL } from '../../constants';

import type {
  GetCurrentUserProfileResponse,
  GetCurrentUserProfileError,
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
}
