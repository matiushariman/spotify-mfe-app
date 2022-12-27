///  <reference types="@types/spotify-web-playback-sdk"/>
import { useState, useMemo, useEffect } from 'react';
import { PlaybackSdkContext } from './PlaybackSdkContext';

import type { PlaybackSdkProviderProps } from './PlaybackSdkProvider.types';

export const PlaybackSdkProvider = ({
  children,
  name = 'Web Playback SDK',
  token,
}: PlaybackSdkProviderProps) => {
  const [player, setPlayer] = useState<Spotify.Player | undefined>();

  useEffect(() => {
    if (token !== '' && !player) {
      const script = document.createElement('script');
      script.src = 'https://sdk.scdn.co/spotify-player.js';
      script.async = true;

      document.body.appendChild(script);

      window.onSpotifyWebPlaybackSDKReady = () => {
        const newPlayer = new window.Spotify.Player({
          name,
          getOAuthToken: (cb) => {
            cb(token);
          },
          volume: 0.5,
        });

        newPlayer.addListener('ready', ({ device_id }) => {
          console.log('Ready with Device ID', device_id);
        });

        newPlayer.addListener('not_ready', ({ device_id }) => {
          console.log('Device ID has gone offline', device_id);
        });

        newPlayer.connect();

        setPlayer(newPlayer);
      };
    }
  }, [token, player]);

  const memoizedValue = useMemo(
    () => ({
      player,
    }),
    [player]
  );

  return (
    <PlaybackSdkContext.Provider value={memoizedValue}>
      {children}
    </PlaybackSdkContext.Provider>
  );
};
