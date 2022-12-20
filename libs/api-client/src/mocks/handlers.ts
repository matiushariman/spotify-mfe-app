// src/mocks/handlers.js
import { rest } from 'msw';

import { API_BASE_URL } from '../constants';

export const handlers = [
  rest.get(`${API_BASE_URL}/v1/me`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        username: 'admin',
      })
    )
  ),
];
