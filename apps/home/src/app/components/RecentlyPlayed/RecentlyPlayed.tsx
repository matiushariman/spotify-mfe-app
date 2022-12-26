import { RecentlyPlayedList } from './RecentlyPlayedList';
import { useGetRecentlyPlayed } from '../../hooks/useGetRecentlyPlayed';

export const RecentlyPlayed = () => {
  const { isLoading } = useGetRecentlyPlayed();

  if (isLoading) {
    return <p>Loading recently played...</p>;
  }

  return (
    <div className="grid gap-5">
      <p className="font-bold text-xl">Recently Played</p>
      <RecentlyPlayedList />
    </div>
  );
};
