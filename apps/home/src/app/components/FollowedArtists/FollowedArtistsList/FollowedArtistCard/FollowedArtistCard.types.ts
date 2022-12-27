import type { FollowedArtist } from '@spotify-mfe-app/api-client';

export type FollowedArtistCardProps = Pick<FollowedArtist, 'name' | 'images'>;
