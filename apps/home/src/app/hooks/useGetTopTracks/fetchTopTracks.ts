import { getAuthToken } from '@spotify-mfe-app/auth-utils';
import { UsersApi } from '@spotify-mfe-app/api-client';

export const fetchTopTracks = async () => {
  const usersApi = new UsersApi({
    token: getAuthToken(process.env['NX_TOKEN_PRIVATE_KEY']),
  });

  const { data } = await usersApi.getUserTopItems({
    query: {
      limit: 6,
    },
    type: 'tracks',
  });

  return data;
};
