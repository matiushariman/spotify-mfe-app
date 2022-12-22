import { rest } from 'msw';

import type { GetRecentlyPlayedTracksResponse } from '../player.types';
import { API_BASE_URL } from '../../../constants';

const mockGetRecentlyPlayedTracksResponse: GetRecentlyPlayedTracksResponse = {
  items: [
    {
      track: {
        album: {
          album_type: 'album',
          artists: [
            {
              external_urls: {
                spotify:
                  'https://open.spotify.com/artist/5TV9JhBjG6c2hHsoibBaIW',
              },
              href: 'https://api.spotify.com/v1/artists/5TV9JhBjG6c2hHsoibBaIW',
              id: '5TV9JhBjG6c2hHsoibBaIW',
              name: 'Petra Sihombing',
              type: 'artist',
              uri: 'spotify:artist:5TV9JhBjG6c2hHsoibBaIW',
            },
          ],
          available_markets: [
            'AD',
            'AE',
            'AG',
            'AL',
            'AM',
            'AO',
            'AR',
            'AT',
            'AU',
            'AZ',
            'BA',
            'BB',
            'BD',
            'BE',
            'BF',
            'BG',
            'BH',
            'BI',
            'BJ',
            'BN',
            'BO',
            'BR',
            'BS',
            'BT',
            'BW',
            'BY',
            'BZ',
            'CA',
            'CD',
            'CG',
            'CH',
            'CI',
            'CL',
            'CM',
            'CO',
            'CR',
            'CV',
            'CW',
            'CY',
            'CZ',
            'DE',
            'DJ',
            'DK',
            'DM',
            'DO',
            'DZ',
            'EC',
            'EE',
            'EG',
            'ES',
            'FI',
            'FJ',
            'FM',
            'FR',
            'GA',
            'GB',
            'GD',
            'GE',
            'GH',
            'GM',
            'GN',
            'GQ',
            'GR',
            'GT',
            'GW',
            'GY',
            'HK',
            'HN',
            'HR',
            'HT',
            'HU',
            'ID',
            'IE',
            'IL',
            'IN',
            'IQ',
            'IS',
            'IT',
            'JM',
            'JO',
            'JP',
            'KE',
            'KG',
            'KH',
            'KI',
            'KM',
            'KN',
            'KR',
            'KW',
            'KZ',
            'LA',
            'LB',
            'LC',
            'LI',
            'LK',
            'LR',
            'LS',
            'LT',
            'LU',
            'LV',
            'LY',
            'MA',
            'MC',
            'MD',
            'ME',
            'MG',
            'MH',
            'MK',
            'ML',
            'MN',
            'MO',
            'MR',
            'MT',
            'MU',
            'MV',
            'MW',
            'MX',
            'MY',
            'MZ',
            'NA',
            'NE',
            'NG',
            'NI',
            'NL',
            'NO',
            'NP',
            'NR',
            'NZ',
            'OM',
            'PA',
            'PE',
            'PG',
            'PH',
            'PK',
            'PL',
            'PS',
            'PT',
            'PW',
            'PY',
            'QA',
            'RO',
            'RS',
            'RW',
            'SA',
            'SB',
            'SC',
            'SE',
            'SG',
            'SI',
            'SK',
            'SL',
            'SM',
            'SN',
            'SR',
            'ST',
            'SV',
            'SZ',
            'TD',
            'TG',
            'TH',
            'TJ',
            'TL',
            'TN',
            'TO',
            'TR',
            'TT',
            'TV',
            'TW',
            'TZ',
            'UA',
            'UG',
            'US',
            'UY',
            'UZ',
            'VC',
            'VE',
            'VN',
            'VU',
            'WS',
            'XK',
            'ZA',
            'ZM',
            'ZW',
          ],
          external_urls: {
            spotify: 'https://open.spotify.com/album/4BrYZTc42JRwe1QuHIPapy',
          },
          href: 'https://api.spotify.com/v1/albums/4BrYZTc42JRwe1QuHIPapy',
          id: '4BrYZTc42JRwe1QuHIPapy',
          images: [
            {
              height: 640,
              url: 'https://i.scdn.co/image/ab67616d0000b2731e03eb0d284feb4023480e8a',
              width: 640,
            },
            {
              height: 300,
              url: 'https://i.scdn.co/image/ab67616d00001e021e03eb0d284feb4023480e8a',
              width: 300,
            },
            {
              height: 64,
              url: 'https://i.scdn.co/image/ab67616d000048511e03eb0d284feb4023480e8a',
              width: 64,
            },
          ],
          name: 'Mine',
          release_date: '2014-06-30',
          release_date_precision: 'day',
          total_tracks: 12,
          type: 'album',
          uri: 'spotify:album:4BrYZTc42JRwe1QuHIPapy',
        },
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5TV9JhBjG6c2hHsoibBaIW',
            },
            href: 'https://api.spotify.com/v1/artists/5TV9JhBjG6c2hHsoibBaIW',
            id: '5TV9JhBjG6c2hHsoibBaIW',
            name: 'Petra Sihombing',
            type: 'artist',
            uri: 'spotify:artist:5TV9JhBjG6c2hHsoibBaIW',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0B8iRRv1YpDoxhcn2lMFs1',
            },
            href: 'https://api.spotify.com/v1/artists/0B8iRRv1YpDoxhcn2lMFs1',
            id: '0B8iRRv1YpDoxhcn2lMFs1',
            name: 'Ben Sihombing',
            type: 'artist',
            uri: 'spotify:artist:0B8iRRv1YpDoxhcn2lMFs1',
          },
        ],
        available_markets: [
          'AD',
          'AE',
          'AG',
          'AL',
          'AM',
          'AO',
          'AR',
          'AT',
          'AU',
          'AZ',
          'BA',
          'BB',
          'BD',
          'BE',
          'BF',
          'BG',
          'BH',
          'BI',
          'BJ',
          'BN',
          'BO',
          'BR',
          'BS',
          'BT',
          'BW',
          'BY',
          'BZ',
          'CA',
          'CD',
          'CG',
          'CH',
          'CI',
          'CL',
          'CM',
          'CO',
          'CR',
          'CV',
          'CW',
          'CY',
          'CZ',
          'DE',
          'DJ',
          'DK',
          'DM',
          'DO',
          'DZ',
          'EC',
          'EE',
          'EG',
          'ES',
          'ET',
          'FI',
          'FJ',
          'FM',
          'FR',
          'GA',
          'GB',
          'GD',
          'GE',
          'GH',
          'GM',
          'GN',
          'GQ',
          'GR',
          'GT',
          'GW',
          'GY',
          'HK',
          'HN',
          'HR',
          'HT',
          'HU',
          'ID',
          'IE',
          'IL',
          'IN',
          'IQ',
          'IS',
          'IT',
          'JM',
          'JO',
          'JP',
          'KE',
          'KG',
          'KH',
          'KI',
          'KM',
          'KN',
          'KR',
          'KW',
          'KZ',
          'LA',
          'LB',
          'LC',
          'LI',
          'LK',
          'LR',
          'LS',
          'LT',
          'LU',
          'LV',
          'LY',
          'MA',
          'MC',
          'MD',
          'ME',
          'MG',
          'MH',
          'MK',
          'ML',
          'MN',
          'MO',
          'MR',
          'MT',
          'MU',
          'MV',
          'MW',
          'MX',
          'MY',
          'MZ',
          'NA',
          'NE',
          'NG',
          'NI',
          'NL',
          'NO',
          'NP',
          'NR',
          'NZ',
          'OM',
          'PA',
          'PE',
          'PG',
          'PH',
          'PK',
          'PL',
          'PS',
          'PT',
          'PW',
          'PY',
          'QA',
          'RO',
          'RS',
          'RW',
          'SA',
          'SB',
          'SC',
          'SE',
          'SG',
          'SI',
          'SK',
          'SL',
          'SM',
          'SN',
          'SR',
          'ST',
          'SV',
          'SZ',
          'TD',
          'TG',
          'TH',
          'TJ',
          'TL',
          'TN',
          'TO',
          'TR',
          'TT',
          'TV',
          'TW',
          'TZ',
          'UA',
          'UG',
          'US',
          'UY',
          'UZ',
          'VC',
          'VE',
          'VN',
          'VU',
          'WS',
          'XK',
          'ZA',
          'ZM',
          'ZW',
        ],
        disc_number: 1,
        duration_ms: 229120,
        explicit: false,
        external_ids: {
          isrc: 'IDA141402216',
        },
        external_urls: {
          spotify: 'https://open.spotify.com/track/6NkUP6IeLnH6Yaw2wcNHzO',
        },
        href: 'https://api.spotify.com/v1/tracks/6NkUP6IeLnH6Yaw2wcNHzO',
        id: '6NkUP6IeLnH6Yaw2wcNHzO',
        is_local: false,
        name: 'Mine',
        popularity: 63,
        preview_url:
          'https://p.scdn.co/mp3-preview/56c62079c0e3fa7a8d3e44b0f9d1f5797cbb1acb?cid=06a2a95448cb464d870d7d98373601d9',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:6NkUP6IeLnH6Yaw2wcNHzO',
      },
      played_at: '2022-12-21T13:20:16.046Z',
      context: null,
    },
  ],
  next: 'https://api.spotify.com/v1/me/player/recently-played?before=1671628816046',
  cursors: {
    after: '1671628816046',
  },
  limit: 20,
  href: 'https://api.spotify.com/v1/me/player/recently-played',
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
