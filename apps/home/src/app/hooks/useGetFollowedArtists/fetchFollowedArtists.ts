import { getAuthToken } from '@spotify-mfe-app/auth-utils';
import { UsersApi } from '@spotify-mfe-app/api-client';

export const fetchFollowedArtists = async () => {
  const usersApi = new UsersApi({
    token: getAuthToken(process.env['NX_TOKEN_PRIVATE_KEY']),
  });

  const { data } = await usersApi.getFollowedArtists();

  return data;
};
