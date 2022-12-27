import { useQueryClient } from 'react-query';
import { GetFollowedArtistsResponse } from '@spotify-mfe-app/api-client';
import { GET_FOLLOWED_ARTISTS } from './constants';

export const useSelectFollowedArtists = () => {
  const queryClient = useQueryClient();

  return (
    queryClient.getQueryData<GetFollowedArtistsResponse>(GET_FOLLOWED_ARTISTS)
      ?.artists.items ?? []
  );
};
