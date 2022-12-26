import { useQueryClient } from 'react-query';
import { GetRecentlyPlayedTracksResponse } from '@spotify-mfe-app/api-client';
import { GET_RECENTLY_PLAYED } from './constants';

export const useSelectRecentlyPlayedItems = () => {
  const queryClient = useQueryClient();

  return (
    queryClient.getQueryData<GetRecentlyPlayedTracksResponse>(
      GET_RECENTLY_PLAYED
    )?.items ?? []
  );
};
