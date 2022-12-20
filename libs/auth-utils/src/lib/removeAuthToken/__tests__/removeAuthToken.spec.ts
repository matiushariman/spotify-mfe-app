const mockRemoveCookie = jest.fn();

jest.mock('typescript-cookie', () => ({
  removeCookie: mockRemoveCookie,
}));

import { removeAuthToken } from '../removeAuthToken';

describe('setAuthToken()', () => {
  it('should call setCookie function', () => {
    removeAuthToken();

    expect(mockRemoveCookie).toHaveBeenCalled();
  });
});
