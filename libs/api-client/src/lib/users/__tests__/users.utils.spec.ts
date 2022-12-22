import { constructGetUserTopItemsQuery } from '../users.utils';

describe('users/users.utils', () => {
  describe(constructGetUserTopItemsQuery, () => {
    it('should return "" if no query is defined', () => {
      expect(constructGetUserTopItemsQuery()).toEqual('');
    });

    it('should return query if query is defined', () => {
      expect(constructGetUserTopItemsQuery({ limit: 10 })).toEqual('?limit=10');
    });
  });
});
