import { useQuery } from 'react-query';

import { GET_RECENTLY_PLAYED } from './constants';
import { fetchRecentlyPlayed } from './fetchRecentlyPlayed';

export const useGetRecentlyPlayed = () => {
  return useQuery(GET_RECENTLY_PLAYED, fetchRecentlyPlayed);
};
