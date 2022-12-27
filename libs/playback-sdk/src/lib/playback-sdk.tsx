import styles from './playback-sdk.module.css';

/* eslint-disable-next-line */
export interface PlaybackSdkProps {}

export function PlaybackSdk(props: PlaybackSdkProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to PlaybackSdk!</h1>
    </div>
  );
}

export default PlaybackSdk;
