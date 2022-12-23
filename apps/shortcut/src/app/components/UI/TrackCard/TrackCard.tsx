import { displayTrackName, displayArtistName } from '../../../utils/nameUtils';
import type { TrackCardProps } from './TrackCard.types';

export const TrackCard = ({ album, name, artistName }: TrackCardProps) => {
  return (
    <div className="grid grid-flow-col gap-4 rounded-md p-3 bg-[#121212] transition hover:bg-black cursor-pointer">
      <img
        src={album.images[0].url}
        width={72}
        height={72}
        alt={album.name}
        className="rounded-md"
      />
      <div>
        <p className="text-sm font-bold text-white">{displayTrackName(name)}</p>
        <p className="text-sm text-gray-500">{displayArtistName(artistName)}</p>
      </div>
    </div>
  );
};
