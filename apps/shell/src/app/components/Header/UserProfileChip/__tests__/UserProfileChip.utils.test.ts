import { getFirstName } from '../UserProfileChip.utils';

describe('components/Header/UserProfileChip', () => {
  describe('getFirstName()', () => {
    it('should return - if displayName is empty', () => {
      expect(getFirstName()).toEqual('-');
    });

    it('should return firstName if displayName is available', () => {
      expect(getFirstName('John Doe')).toEqual('John');
    });
  });
});
