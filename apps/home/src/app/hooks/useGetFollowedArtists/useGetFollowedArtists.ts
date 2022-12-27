import { useQuery } from 'react-query';

import { GET_FOLLOWED_ARTISTS } from './constants';
import { fetchFollowedArtists } from './fetchFollowedArtists';

export const useGetFollowedArtists = () => {
  return useQuery(GET_FOLLOWED_ARTISTS, fetchFollowedArtists);
};
