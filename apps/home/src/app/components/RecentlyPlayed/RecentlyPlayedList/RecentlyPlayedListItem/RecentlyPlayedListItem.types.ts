import type { Album, Artist } from '@spotify-mfe-app/api-client';

export interface RecentlyPlayedListItemProps {
  readonly album: Album;
  readonly artistName: Artist['name'];
  readonly name: string;
}
