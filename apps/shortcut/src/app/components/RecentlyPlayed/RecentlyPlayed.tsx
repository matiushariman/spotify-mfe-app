import { RecentlyPlayedList } from './RecentlyPlayedList';
import { useGetRecentlyPlayed } from '../../hooks/useGetRecentlyPlayed';

export const RecentlyPlayed = () => {
  const { isLoading } = useGetRecentlyPlayed();

  return (
    <div className="grid gap-3">
      <p className="uppercase text-sm font-bold">Recently Played</p>
      <div className="h-[96px]">
        {isLoading ? null : <RecentlyPlayedList />}
      </div>
    </div>
  );
};
