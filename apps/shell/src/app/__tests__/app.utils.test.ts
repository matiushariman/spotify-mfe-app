import {
  shouldLoginToSpotify,
  navigateToSpotify,
  shouldDisplayApp,
} from '../app.utils';

const mockWindowReplace = jest.fn();

Object.defineProperty(window, 'location', {
  value: {
    replace: mockWindowReplace,
  },
});

jest.mock('@spotify-mfe-app/auth-utils', () => ({
  checkAuthToken: jest
    .fn()
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true),
  getSpotifyAuthUrl: jest.fn().mockReturnValue('https://spotify.com/'),
}));
describe('app/app.utils', () => {
  describe('shouldLogintoSpotify()', () => {
    it('should return true if token does not exist && user is not on callback page', () => {
      expect(shouldLoginToSpotify('')).toEqual(true);
    });

    it('should return false if token does not exist but user is on callback page', () => {
      expect(shouldLoginToSpotify('callback')).toEqual(false);
    });

    it('should return false if token exists and the user is not on callback page', () => {
      expect(shouldLoginToSpotify('')).toEqual(false);
    });
  });

  describe('navigateToSpotify()', () => {
    it('should call window.replace method', () => {
      navigateToSpotify();

      expect(mockWindowReplace).toHaveBeenCalled();
    });
  });

  describe(shouldDisplayApp, () => {
    it('should return true if pathname does not include "callback"', () => {
      expect(shouldDisplayApp('hello')).toEqual(true);
    });

    it('should return false if pathname does include "callback"', () => {
      expect(shouldDisplayApp('callback')).toEqual(false);
    });
  });
});
