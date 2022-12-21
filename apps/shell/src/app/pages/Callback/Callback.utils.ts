import { setAuthToken } from '@spotify-mfe-app/auth-utils';

export const setTokenFromUrlParams = async (hash: string) => {
  const splitHash = hash.split('access_token=');
  const accessToken = splitHash[1].split('&');

  return setAuthToken(accessToken[0], process.env['NX_TOKEN_PRIVATE_KEY']);
};
