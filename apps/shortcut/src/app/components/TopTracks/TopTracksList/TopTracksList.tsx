import { useSelectTopTracks } from '../../../hooks/useGetTopTracks';
import { TrackCard } from '../../UI/TrackCard';

export const TopTracksList = () => {
  const tracks = useSelectTopTracks();

  if (tracks.length === 0) {
    return <p>You currently don't have any top tracks.</p>;
  }

  return (
    <div aria-label="top tracks" className="flex gap-4 overflow-auto w-full">
      {tracks.map((track) => (
        <TrackCard
          key={track.id}
          album={track.album}
          name={track.name}
          artistName={track.artists[0].name}
        />
      ))}
    </div>
  );
};
