import { useGetProfile } from '../index';

import { renderHook, wrapper, waitFor } from '../../../utils/testUtils';

describe('components/hooks/useGetProfile', () => {
  it('should return games response', async () => {
    const { result } = renderHook(() => useGetProfile(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toMatchInlineSnapshot(`
      Object {
        "country": "SG",
        "display_name": "Test Account",
        "email": "pottage.silt-0d@icloud.com",
        "explicit_content": Object {
          "filter_enabled": false,
          "filter_locked": false,
        },
        "external_urls": Object {
          "spotify": "https://open.spotify.com/user/31amcddtdt7u75pa3qzjukke6iiu",
        },
        "followers": Object {
          "href": null,
          "total": 0,
        },
        "href": "https://api.spotify.com/v1/users/31amcddtdt7u75pa3qzjukke6iiu",
        "id": "31amcddtdt7u75pa3qzjukke6iiu",
        "images": Array [],
        "product": "open",
        "type": "user",
        "uri": "spotify:user:31amcddtdt7u75pa3qzjukke6iiu",
      }
    `);
  });
});
