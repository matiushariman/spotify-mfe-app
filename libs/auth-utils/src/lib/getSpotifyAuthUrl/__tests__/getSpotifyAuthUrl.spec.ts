import { getSpotifyAuthUrl } from '../getSpotifyAuthUrl';

describe('getSpotifyAuthUrl()', () => {
  it('should return spotify auth URL', () => {
    expect(
      getSpotifyAuthUrl({
        clientId: 'client',
        redirectUri: 'http://localhost:4200/',
      })
    ).toMatchInlineSnapshot(
      `"https://accounts.spotify.com/authorize?response_type=token&scope=user-read-private%20user-read-email&client_id=client&redirect_uri=http://localhost:4200/"`
    );
  });
});
