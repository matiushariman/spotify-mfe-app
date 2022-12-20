import type { GetSpotifyAuthUrlParams } from './getSpotifyAuthUrl.types';
export const getSpotifyAuthUrl = ({
  redirectUri = 'http://localhost:4200/callback/',
  clientId,
}: GetSpotifyAuthUrlParams) => {
  const authorizationUrl = 'https://accounts.spotify.com/authorize';
  const scope = ['user-read-private', 'user-read-email'];

  return `${authorizationUrl}?response_type=token&scope=${encodeURIComponent(
    scope.join(' ')
  )}&client_id=${clientId}&redirect_uri=${redirectUri}`;
};
