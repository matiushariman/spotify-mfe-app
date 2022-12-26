export const displayTrackName = (trackName: string) => {
  const MAX_TRACK_NAME_LENGTH = 15;

  if (trackName.length <= MAX_TRACK_NAME_LENGTH) {
    return trackName;
  }

  return `${trackName.slice(0, MAX_TRACK_NAME_LENGTH)}...`;
};

export const displayArtistName = (artistName: string) => {
  const MAX_ARTIST_NAME_LENGTH = 23;

  if (artistName.length <= MAX_ARTIST_NAME_LENGTH) {
    return artistName;
  }

  return `${artistName.slice(0, MAX_ARTIST_NAME_LENGTH)}...`;
};
