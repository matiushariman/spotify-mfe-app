import {
  displayArtistName,
  displayTrackName,
} from '../../../../utils/nameUtils';

import type { RecentlyPlayedListItemProps } from './RecentlyPlayedListItem.types';

export const RecentlyPlayedListItem = ({
  name,
  artistName,
  album,
}: RecentlyPlayedListItemProps) => (
  <div className="grid rounded-md p-4 gap-4 bg-[#121212] transition hover:bg-black cursor-pointer">
    <img
      src={album.images[0].url}
      alt={album.name}
      className="rounded-md w-full"
    />
    <div>
      <p className="font-bold text-white">{displayTrackName(name)}</p>
      <p className="text-gray-500">{displayArtistName(artistName)}</p>
    </div>
  </div>
);
