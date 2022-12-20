import { getAuthToken } from '../getAuthToken';

jest.mock('typescript-cookie', () => ({
  getCookie: jest
    .fn()
    .mockReturnValueOnce(undefined)
    .mockReturnValueOnce('token'),
}));

describe('getAuthToken()', () => {
  it('should return empty string if token is not found', () => {
    expect(getAuthToken()).toEqual('');
  });

  it('should return token if token is found', () => {
    expect(getAuthToken()).toEqual('token');
  });
});
