import { RecentlyPlayedListItem } from './RecentlyPlayedListItem';
import { useSelectRecentlyPlayedItems } from '../../../hooks/useGetRecentlyPlayed';

export const RecentlyPlayedList = () => {
  const recentlyPlayed = useSelectRecentlyPlayedItems();

  if (recentlyPlayed.length === 0) {
    return <p>You have not played anything recently.</p>;
  }

  return (
    <div className="grid grid-cols-6" aria-label="recently played tracks">
      {recentlyPlayed.map((recentlyPlayedItem) => (
        <RecentlyPlayedListItem
          name={recentlyPlayedItem.track.name}
          artistName={recentlyPlayedItem.track.artists[0].name}
          album={recentlyPlayedItem.track.album}
          key={recentlyPlayedItem.track.id}
        />
      ))}
    </div>
  );
};
