const mockSetCookie = jest.fn();

jest.mock('typescript-cookie', () => ({
  setCookie: mockSetCookie,
}));

jest.mock('crypto-js', () => ({
  AES: {
    encrypt: jest.fn().mockReturnValue(''),
  },
}));

import { setAuthToken } from '../setAuthToken';

describe('setAuthToken()', () => {
  it('should call setCookie function', () => {
    setAuthToken('token');

    expect(mockSetCookie).toHaveBeenCalled();
  });
});
