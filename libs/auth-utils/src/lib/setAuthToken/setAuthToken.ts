import { setCookie } from 'typescript-cookie';
import * as CryptoJS from 'crypto-js';

import type { SetAuthToken } from './setAuthToken.types';

/**
 * - Store encrypted token in browser cookie
 */
export const setAuthToken: SetAuthToken = (token, privateKey = 'private_key') =>
  setCookie('token', CryptoJS.AES.encrypt(token, privateKey).toString());
