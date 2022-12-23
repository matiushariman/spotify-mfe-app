import { TopTracksList } from './TopTracksList';
import { useGetTopTracks } from '../../hooks/useGetTopTracks';

export const TopTracks = () => {
  const { isLoading } = useGetTopTracks();

  return (
    <div className="grid gap-3">
      <p className="uppercase text-sm font-bold">Top Tracks</p>
      <div className="h-[96px]">
        {isLoading ? <p>Loading top tracks data...</p> : <TopTracksList />}
      </div>
    </div>
  );
};
