import { rest } from 'msw';

import { API_BASE_URL } from '../../../constants';

import type { GetCurrentUserProfileResponse } from '../users.types';

export const usersHandlers = [
  rest.get(`${API_BASE_URL}/v1/me`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json<GetCurrentUserProfileResponse>({
        country: 'SG',
        display_name: 'Test Account',
        email: 'pottage.silt-0d@icloud.com',
        explicit_content: {
          filter_enabled: false,
          filter_locked: false,
        },
        external_urls: {
          spotify: 'https://open.spotify.com/user/31amcddtdt7u75pa3qzjukke6iiu',
        },
        followers: {
          href: null,
          total: 0,
        },
        href: 'https://api.spotify.com/v1/users/31amcddtdt7u75pa3qzjukke6iiu',
        id: '31amcddtdt7u75pa3qzjukke6iiu',
        images: [],
        product: 'open',
        type: 'user',
        uri: 'spotify:user:31amcddtdt7u75pa3qzjukke6iiu',
      })
    )
  ),
];
