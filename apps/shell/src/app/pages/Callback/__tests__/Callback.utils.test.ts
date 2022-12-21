import { setTokenFromUrlParams } from '../Callback.utils';

const mockSetAuthToken = jest.fn();

jest.mock('@spotify-mfe-app/auth-utils', () => ({
  setAuthToken: () => mockSetAuthToken(),
}));

describe('pages/Callback/Callback.utils', () => {
  describe('setTokenFromUrlParams', () => {
    it('should call setToken function', async () => {
      await setTokenFromUrlParams('#access_token=abcd&type=');

      expect(mockSetAuthToken).toHaveBeenCalled();
    });
  });
});
