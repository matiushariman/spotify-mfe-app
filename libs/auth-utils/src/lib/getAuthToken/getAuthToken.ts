import { getCookie } from 'typescript-cookie';

export const getAuthToken = () => getCookie('token') ?? '';
