import { TopTracksList } from './TopTracksList';
import { useGetTopTracks } from '../../hooks/useGetTopTracks';

export const TopTracks = () => {
  const { isLoading } = useGetTopTracks();

  return (
    <div className="grid gap-5">
      <p className="font-bold text-xl">Top Tracks</p>
      {isLoading ? <p>Loading your top tracks...</p> : <TopTracksList />}
    </div>
  );
};
