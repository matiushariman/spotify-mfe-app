import { getAuthToken } from '@spotify-mfe-app/auth-utils';
import { PlaylistsApi } from '@spotify-mfe-app/api-client';

export const fetchPlaylists = async () => {
  const playlistsApi = new PlaylistsApi({
    token: getAuthToken(process.env['NX_TOKEN_PRIVATE_KEY']),
  });

  const { data } = await playlistsApi.getCurrentUserPlaylists();

  return data;
};
