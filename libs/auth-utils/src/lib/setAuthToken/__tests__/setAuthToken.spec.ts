const mockSetCookie = jest.fn();

jest.mock('typescript-cookie', () => ({
  setCookie: mockSetCookie,
}));

import { setAuthToken } from '../setAuthToken';

describe('setAuthToken()', () => {
  it('should call setCookie function', () => {
    setAuthToken('token');

    expect(mockSetCookie).toHaveBeenCalled();
  });
});
