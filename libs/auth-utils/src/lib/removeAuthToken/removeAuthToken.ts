import { removeCookie } from 'typescript-cookie';

/**
 * - Remove token stored in browser cookie
 */
export const removeAuthToken = () => removeCookie('token');
