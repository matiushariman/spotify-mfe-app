import type { ReactNode } from 'react';

export interface PlaybackSdkProviderProps {
  readonly name?: string;
  readonly token: string;
  readonly children?: ReactNode;
}
