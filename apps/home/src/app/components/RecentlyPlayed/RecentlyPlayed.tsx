import { RecentlyPlayedList } from './RecentlyPlayedList';
import { useGetRecentlyPlayed } from '../../hooks/useGetRecentlyPlayed';

export const RecentlyPlayed = () => {
  const { isLoading } = useGetRecentlyPlayed();

  return (
    <div className="grid gap-5">
      <p className="font-bold text-xl">Recently Played</p>
      <div className="h-[307px]">
        {isLoading ? <p>Loading recently played...</p> : <RecentlyPlayedList />}
      </div>
    </div>
  );
};
