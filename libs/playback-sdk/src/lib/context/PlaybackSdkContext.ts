import { createContext } from 'react';

import type { PlaybackSdkContextProps } from './PlaybackSdkContext.types';

export const PlaybackSdkContext = createContext<PlaybackSdkContextProps>({});
