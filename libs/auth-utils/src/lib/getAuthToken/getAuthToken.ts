import { getCookie } from 'typescript-cookie';

/**
 * - Retrieve token from browser cookie
 */
export const getAuthToken = () => getCookie('token') ?? '';
