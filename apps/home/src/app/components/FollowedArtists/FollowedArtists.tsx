import { FollowedArtistsList } from './FollowedArtistsList';
import { useGetFollowedArtists } from '../../hooks/useGetFollowedArtists';

export const FollowedArtists = () => {
  const { isLoading } = useGetFollowedArtists();

  return (
    <div className="bg-[#121212] pt-4 pb-4 pl-6 gap-2 grid border-b border-[rgba(0,0,0,0.3)]">
      <p className="font-bold">Following</p>
      <div className="h-[148px]">
        {isLoading ? <p>Loading your following...</p> : <FollowedArtistsList />}
      </div>
    </div>
  );
};
