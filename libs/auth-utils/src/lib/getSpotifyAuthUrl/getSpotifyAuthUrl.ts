import type { GetSpotifyAuthUrlParams } from './getSpotifyAuthUrl.types';
export const getSpotifyAuthUrl = ({
  redirectUri = 'http://localhost:4200/callback/',
  clientId,
}: GetSpotifyAuthUrlParams) => {
  const authorizationUrl = 'https://accounts.spotify.com/authorize';
  const scope = [
    'user-read-private',
    'user-read-email',
    // Read access to a user’s recently played tracks.
    'user-read-recently-played',
    // Read access to a user's top artists and tracks.
    'user-top-read',
    // Read access to the list of artists and other users that the user follows.
    'user-follow-read',
  ];

  return `${authorizationUrl}?response_type=token&scope=${encodeURIComponent(
    scope.join(' ')
  )}&client_id=${clientId}&redirect_uri=${redirectUri}`;
};
