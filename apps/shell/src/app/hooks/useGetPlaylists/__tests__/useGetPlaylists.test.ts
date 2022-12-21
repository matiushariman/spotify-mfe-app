import { useGetPlaylists } from '../useGetPlaylists';

import { renderHook, wrapper, waitFor } from '../../../utils/testUtils';

describe('components/hooks/useGetPlaylists', () => {
  it('should return playlists response', async () => {
    const { result } = renderHook(() => useGetPlaylists(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toMatchInlineSnapshot(`
      Object {
        "href": "https://api.spotify.com/v1/me/shows?offset=0&limit=20
      ",
        "items": Array [
          Object {
            "collaborative": true,
            "description": "string",
            "external_urls": Object {
              "spotify": "string",
            },
            "href": "string",
            "id": "string",
            "images": Array [
              Object {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                "width": 300,
              },
            ],
            "name": "string",
            "owner": Object {
              "display_name": "string",
              "external_urls": Object {
                "spotify": "string",
              },
              "followers": Object {
                "href": "string",
                "total": 0,
              },
              "href": "string",
              "id": "string",
              "type": "user",
              "uri": "string",
            },
            "public": true,
            "snapshot_id": "string",
            "tracks": Object {
              "href": "string",
              "total": 0,
            },
            "type": "playlist",
            "uri": "string",
          },
        ],
        "limit": 20,
        "next": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "offset": 0,
        "previous": "https://api.spotify.com/v1/me/shows?offset=1&limit=1",
        "total": 4,
      }
    `);
  });
});
