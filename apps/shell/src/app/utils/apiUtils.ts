import type { ApiErrorResponse } from '@spotify-mfe-app/api-client';
import { removeAuthToken } from '@spotify-mfe-app/auth-utils';

export const handleApiError = (err: ApiErrorResponse) => {
  const {
    error: { status },
  } = err;

  if (status === 401) {
    window.alert(
      'Your session has expired! Click close to reauthenticate your session.'
    );

    removeAuthToken();
    window.location.replace('/');
  }
};
