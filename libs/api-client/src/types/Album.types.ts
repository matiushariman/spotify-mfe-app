import { Artist } from './Artist.types';
import { ExternalUrls } from './ExternalUrls.types';
import { Image } from './Image.types';

export interface Album {
  readonly album_type: 'album' | 'ALBUM';
  readonly artists: Artist[];
  readonly available_markets: string[];
  readonly external_urls: ExternalUrls;
  readonly href: string;
  readonly id: string;
  readonly images: Image[];
  readonly name: string;
  readonly release_date: string;
  readonly release_date_precision: 'day';
  readonly total_tracks: number;
  readonly type: 'album';
  readonly uri: string;
}
