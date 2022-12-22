import { GetRecentlyPlayedTracksItemTrack } from '@spotify-mfe-app/api-client';

export type RecentlyPlayedListItemProps = Pick<
  GetRecentlyPlayedTracksItemTrack,
  'album' | 'name' | 'artists'
>;
