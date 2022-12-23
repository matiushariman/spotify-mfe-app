import { ExternalUrls } from './ExternalUrls.types';

export interface Artist {
  readonly external_urls: ExternalUrls;
  readonly href: string;
  readonly id: string;
  readonly name: string;
  readonly type: 'artist';
  readonly uri: string;
}
