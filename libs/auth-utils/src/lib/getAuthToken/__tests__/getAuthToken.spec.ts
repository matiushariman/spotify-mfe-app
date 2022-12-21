import { getAuthToken } from '../getAuthToken';

jest.mock('typescript-cookie', () => ({
  getCookie: jest
    .fn()
    .mockReturnValueOnce(undefined)
    .mockReturnValueOnce('token'),
}));

jest.mock('crypto-js', () => ({
  AES: {
    decrypt: jest.fn().mockReturnValue('token'),
  },
  enc: {
    Utf8: jest.fn().mockReturnValue(''),
  },
}));

describe('getAuthToken()', () => {
  it('should return empty string if token is not found', () => {
    expect(getAuthToken()).toEqual('');
  });

  it('should return token if token is found', () => {
    expect(getAuthToken()).toEqual('token');
  });
});
