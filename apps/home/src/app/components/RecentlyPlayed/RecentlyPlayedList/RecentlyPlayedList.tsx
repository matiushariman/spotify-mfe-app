import { useSelectRecentlyPlayedItems } from '../../../hooks/useGetRecentlyPlayed';
import { TrackCard } from '../../ui/TrackCard';

export const RecentlyPlayedList = () => {
  const recentlyPlayed = useSelectRecentlyPlayedItems();

  if (recentlyPlayed.length === 0) {
    return <p>You have not played anything recently.</p>;
  }

  return (
    <div className="grid grid-cols-6 gap-4" aria-label="recently played tracks">
      {recentlyPlayed.map((recentlyPlayedItem) => (
        <TrackCard
          name={recentlyPlayedItem.track.name}
          artistName={recentlyPlayedItem.track.artists[0].name}
          album={recentlyPlayedItem.track.album}
          key={recentlyPlayedItem.track.id}
        />
      ))}
    </div>
  );
};
