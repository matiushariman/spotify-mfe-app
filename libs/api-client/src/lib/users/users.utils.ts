import type { GetUserTopItemsRequest } from './users.types';
export const constructGetUserTopItemsQuery = (
  query?: GetUserTopItemsRequest['query']
) => {
  if (!query) {
    return '';
  }

  return `?limit=${query.limit}`;
};
