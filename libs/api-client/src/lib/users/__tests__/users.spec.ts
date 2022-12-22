import { UsersApi } from '../users';

describe('lib/users', () => {
  const usersApi = new UsersApi({ token: '' });

  describe('getCurrentUserProfile()', () => {
    it('should return user profile data', async () => {
      const res = await usersApi.getCurrentUserProfile();

      expect(res.status).toEqual(200);
      expect(res.data).toMatchSnapshot();
    });
  });

  describe(usersApi.getUserTopItems, () => {
    it('should return user top tracks', async () => {
      const res = await usersApi.getUserTopItems({ type: 'tracks' });

      expect(res.status).toEqual(200);
      expect(res.data).toMatchSnapshot();
    });
  });
});
