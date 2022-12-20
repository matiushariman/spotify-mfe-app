import { getCookie } from 'typescript-cookie';

export const checkAuthToken = () => typeof getCookie('token') === 'string';
