import { FollowedArtistsList } from './FollowedArtistsList';
import { useGetFollowedArtists } from '../../hooks/useGetFollowedArtists';

export const FollowedArtists = () => {
  const { isLoading } = useGetFollowedArtists();

  return (
    <div className="pt-4 pb-4 pl-6 gap-2 grid bg-gradient-to-r from-[#1db954] to-[#191414]">
      <p className="font-bold">Following</p>
      <div className="h-[148px]">
        {isLoading ? <p>Loading your following...</p> : <FollowedArtistsList />}
      </div>
    </div>
  );
};
