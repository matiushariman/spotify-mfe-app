import { useQueryClient } from 'react-query';
import { GetUserTopItemsResponse } from '@spotify-mfe-app/api-client';
import { GET_TOP_TRACKS } from './useGetTopTracks.constants';

export const useSelectTopTracks = () => {
  const queryClient = useQueryClient();

  return (
    queryClient.getQueryData<GetUserTopItemsResponse>(GET_TOP_TRACKS)?.items ??
    []
  );
};
