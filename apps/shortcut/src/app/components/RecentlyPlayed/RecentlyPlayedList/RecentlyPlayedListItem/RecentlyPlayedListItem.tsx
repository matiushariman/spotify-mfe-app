import {
  displayTrackName,
  displayArtistName,
} from '../../../../utils/nameUtils';
import type { RecentlyPlayedListItemProps } from './RecentlyPlayedListItem.types';

export const RecentlyPlayedListItem = ({
  album,
  name,
  artists,
}: RecentlyPlayedListItemProps) => {
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
        <p className="text-sm text-gray-500">
          {displayArtistName(artists[0].name)}
        </p>
      </div>
    </div>
  );
};
