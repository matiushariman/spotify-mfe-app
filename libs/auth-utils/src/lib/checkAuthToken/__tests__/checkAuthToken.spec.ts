import { checkAuthToken } from '../checkAuthToken';

jest.mock('typescript-cookie', () => ({
  getCookie: jest
    .fn()
    .mockReturnValueOnce(undefined)
    .mockReturnValueOnce('token'),
}));

describe('checkAuthToken()', () => {
  it('should return false if token is not found', () => {
    expect(checkAuthToken()).toEqual(false);
  });

  it('should return true if token is found', () => {
    expect(checkAuthToken()).toEqual(true);
  });
});
