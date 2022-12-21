import { useQuery } from 'react-query';

import { GET_USER_PLAYLISTS } from './useGetPlaylists.constants';
import { fetchPlaylists } from './fetchPlaylists';

export const useGetPlaylists = () => {
  return useQuery(GET_USER_PLAYLISTS, fetchPlaylists);
};
