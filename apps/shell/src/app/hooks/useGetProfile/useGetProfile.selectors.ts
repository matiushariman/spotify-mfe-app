import { useQueryClient } from 'react-query';
import { GetCurrentUserProfileResponse } from '@spotify-mfe-app/api-client';
import { GET_USER_PROFILE } from './useGetProfile.constants';

export const useSelectProfile = () => {
  const queryClient = useQueryClient();

  return queryClient.getQueryData<GetCurrentUserProfileResponse>(
    GET_USER_PROFILE
  );
};
