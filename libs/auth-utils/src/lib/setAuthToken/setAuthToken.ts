import { setCookie } from 'typescript-cookie';

import type { SetAuthToken } from './setAuthToken.types';

/**
 * - Store token in browser cookie
 */
export const setAuthToken: SetAuthToken = (token) => setCookie('token', token);
