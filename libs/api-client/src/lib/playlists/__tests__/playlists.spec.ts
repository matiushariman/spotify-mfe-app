import { PlaylistsApi } from '../playlists';

describe('lib/playlists', () => {
  const playlistsApi = new PlaylistsApi({ token: '' });

  describe('getCurrentUserPlaylists()', () => {
    it('should return user playlists data', async () => {
      const res = await playlistsApi.getCurrentUserPlaylists();

      expect(res.status).toEqual(200);
      expect(res.data).toMatchSnapshot();
    });
  });
});
