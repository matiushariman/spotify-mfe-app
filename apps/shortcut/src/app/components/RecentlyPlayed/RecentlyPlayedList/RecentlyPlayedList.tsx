import { TrackCard } from '../../UI/TrackCard';
import { useSelectRecentlyPlayedItems } from '../../../hooks/useGetRecentlyPlayed';

export const RecentlyPlayedList = () => {
  const items = useSelectRecentlyPlayedItems();

  if (items?.length === 0) {
    return <p>You have not played anything recently.</p>;
  }

  return (
    <div
      aria-label="recently played tracks"
      className="flex gap-4 overflow-auto w-full"
    >
      {items.map((item) => (
        <TrackCard
          key={item.track.id}
          album={item.track.album}
          name={item.track.name}
          artistName={item.track.artists[0].name}
        />
      ))}
    </div>
  );
};
