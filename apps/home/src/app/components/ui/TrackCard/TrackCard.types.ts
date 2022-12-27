import type { Album, Artist } from '@spotify-mfe-app/api-client';

export interface TrackCardProps {
  readonly album: Album;
  readonly artistName: Artist['name'];
  readonly name: string;
}
