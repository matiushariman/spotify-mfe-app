import { getCookie } from 'typescript-cookie';
import * as CryptoJS from 'crypto-js';

/**
 * - Retrieve token from browser cookie
 */
export const getAuthToken = (privateKey = 'private_key') => {
  const encryptedToken = getCookie('token') ?? '';

  if (encryptedToken === '') {
    return '';
  }

  const bytes = CryptoJS.AES.decrypt(encryptedToken, privateKey);

  return bytes.toString(CryptoJS.enc.Utf8);
};
