import { TrackCard } from '../../ui/TrackCard';
import { useSelectTopTracks } from '../../../hooks/useGetTopTracks';

export const TopTracksList = () => {
  const topTracks = useSelectTopTracks();

  if (topTracks.length === 0) {
    return <p>You don't have any top tracks.</p>;
  }

  return (
    <div className="grid grid-cols-6 gap-4" aria-label="top tracks">
      {topTracks.map((track) => (
        <TrackCard
          name={track.name}
          artistName={track.artists[0].name}
          album={track.album}
          key={track.id}
        />
      ))}
    </div>
  );
};
