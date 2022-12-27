import { useQuery } from 'react-query';

import { GET_TOP_TRACKS } from './useGetTopTracks.constants';
import { fetchTopTracks } from './fetchTopTracks';

export const useGetTopTracks = () => {
  return useQuery(GET_TOP_TRACKS, fetchTopTracks);
};
