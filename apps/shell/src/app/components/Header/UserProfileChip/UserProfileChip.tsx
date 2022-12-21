import DefaultAvatar from './assets/default-avatar.jpg';
import { getGreetings, getFirstName } from './UserProfileChip.utils';

import { useSelectProfile } from '../hooks/useGetProfile';

export const UserProfileChip = () => {
  const user = useSelectProfile();
  const userHasAvatar = user && user.images.length > 0;
  const img = {
    src: userHasAvatar ? user?.images[0].url : DefaultAvatar,
    alt: userHasAvatar ? 'user avatar' : 'Image by studiogstock on Freepik',
  };

  return (
    <button className="bg-[#121212] hover:bg-black transition rounded-full pt-1 pb-1 pl-3 pr-1 flex items-center">
      <p className="font-bold uppercase">
        <span className="text-gray-300 font-medium text-sm normal-case">
          {getGreetings()}
          {', '}
        </span>
        {getFirstName(user?.display_name)}!
      </p>
      <img
        src={img.src}
        className="rounded-full ml-2"
        width={32}
        height={32}
        alt={img.alt}
      />
    </button>
  );
};
