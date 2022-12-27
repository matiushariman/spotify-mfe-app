import { displayArtistName } from '../../../../utils/nameUtils';

import type { FollowedArtistCardProps } from './FollowedArtistCard.types';

export const FollowedArtistCard = ({
  name,
  images,
}: FollowedArtistCardProps) => (
  <div className="flex-none p-3 max-w-[232px] transition hover:bg-[rgba(0,0,0,0.4)] cursor-pointer">
    <div className="flex flex-col items-center justify-around gap-2">
      <img
        src={images[0].url}
        alt={name}
        width={96}
        height={96}
        className="rounded-full"
        loading="lazy"
      />
      <p className="font-bold text-white text-sm">{displayArtistName(name)}</p>
    </div>
  </div>
);
