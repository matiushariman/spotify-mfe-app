import { checkAuthToken } from '@spotify-mfe-app/auth-utils';

export const shouldLoginToSpotify = (pathname: string) =>
  !checkAuthToken() && !pathname.includes('callback');

export const navigateToSpotify = () =>
  window.location.replace('https://spotify.com');
