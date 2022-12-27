import { displayArtistName, displayTrackName } from '../../../utils/nameUtils';

import type { TrackCardProps } from './TrackCard.types';

export const TrackCard = ({ name, artistName, album }: TrackCardProps) => (
  <div className="grid rounded-md p-4 gap-4 bg-[#121212] transition hover:bg-black cursor-pointer">
    <img
      src={album.images[0].url}
      alt={album.name}
      className="rounded-md w-full"
      loading="lazy"
    />
    <div>
      <p className="font-bold text-white">{displayTrackName(name)}</p>
      <p className="text-gray-500">{displayArtistName(artistName)}</p>
    </div>
  </div>
);
