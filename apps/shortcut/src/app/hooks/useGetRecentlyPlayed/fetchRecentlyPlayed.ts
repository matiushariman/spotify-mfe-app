import { getAuthToken } from '@spotify-mfe-app/auth-utils';
import { PlayerApi } from '@spotify-mfe-app/api-client';

export const fetchRecentlyPlayed = async () => {
  const playerApi = new PlayerApi({
    token: getAuthToken(process.env['NX_TOKEN_PRIVATE_KEY']),
  });

  const { data } = await playerApi.getRecentlyPlayedTracks();

  return data;
};
