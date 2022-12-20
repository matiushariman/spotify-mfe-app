import axios from 'axios';

import { API_BASE_URL } from '../constants';

export const apiClient = async () =>
  axios.get(`${API_BASE_URL}/v1/me`).then((res) => res);
