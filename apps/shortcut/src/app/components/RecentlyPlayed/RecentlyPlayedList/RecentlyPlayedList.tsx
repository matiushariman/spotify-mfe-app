import { RecentlyPlayedListItem } from './RecentlyPlayedListItem';
import { useSelectRecentlyPlayedItems } from '../../../hooks/useGetRecentlyPlayed';

export const RecentlyPlayedList = () => {
  const items = useSelectRecentlyPlayedItems();

  if (items?.length === 0) {
    return <p>You have not played anything recently.</p>;
  }

  return (
    <div className="flex gap-4 overflow-auto w-full">
      {items.map((item) => (
        <RecentlyPlayedListItem
          key={item.track.id}
          album={item.track.album}
          name={item.track.name}
          artists={item.track.artists}
        />
      ))}
    </div>
  );
};
