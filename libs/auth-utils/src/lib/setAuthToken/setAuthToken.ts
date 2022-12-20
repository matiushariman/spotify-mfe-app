import { setCookie } from 'typescript-cookie';

import type { SetAuthToken } from './setAuthToken.types';

export const setAuthToken: SetAuthToken = (token) => setCookie('token', token);
