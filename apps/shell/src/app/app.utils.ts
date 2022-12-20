import { checkAuthToken, getSpotifyAuthUrl } from '@spotify-mfe-app/auth-utils';

export const shouldLoginToSpotify = (pathname: string) =>
  !checkAuthToken() && !pathname.includes('callback');

export const navigateToSpotify = () => {
  const spotifyUrl = getSpotifyAuthUrl({
    clientId: process.env['NX_SPOTIFY_CLIENT_ID'],
    redirectUri: process.env['NX_SPOTIFY_REDIRECT_URI'],
  });

  window.location.replace(spotifyUrl);
};
