import { rest } from 'msw';

import type { GetRecentlyPlayedTracksResponse } from '../player.types';
import { API_BASE_URL } from '../../../constants';

const mockGetRecentlyPlayedTracksResponse: GetRecentlyPlayedTracksResponse = {
  href: 'string',
  items: [''],
  limit: 0,
  next: 'string',
  cursors: {
    after: 'string',
  },
  total: 0,
};

export const playerHandlers = [
  rest.get(`${API_BASE_URL}/v1/me/player/recently-played`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<GetRecentlyPlayedTracksResponse>(
        mockGetRecentlyPlayedTracksResponse
      )
    )
  ),
];
