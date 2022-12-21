import { PlayerApi } from '../player';

describe('lib/player', () => {
  const playerApi = new PlayerApi({ token: '' });

  describe('getRecentlyPlayedTracks()', () => {
    it('should return recenty played tracks data', async () => {
      const res = await playerApi.getRecentlyPlayedTracks();

      expect(res.status).toEqual(200);
      expect(res.data).toMatchSnapshot();
    });
  });
});
