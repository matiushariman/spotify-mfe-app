import { FollowedArtistCard } from './FollowedArtistCard';
import { useSelectFollowedArtists } from '../../../hooks/useGetFollowedArtists';

export const FollowedArtistsList = () => {
  const followedArtists = useSelectFollowedArtists();

  if (followedArtists.length === 0) {
    return <p>You haven't followed any artists.</p>;
  }

  return (
    <div aria-label="followed artists" className="flex overflow-x-auto gap-4">
      {followedArtists.map((artist) => (
        <FollowedArtistCard
          name={artist.name}
          images={artist.images}
          key={artist.id}
        />
      ))}
    </div>
  );
};
