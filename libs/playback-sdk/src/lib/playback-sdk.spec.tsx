import { render } from '@testing-library/react';

import PlaybackSdk from './playback-sdk';

describe('PlaybackSdk', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlaybackSdk />);
    expect(baseElement).toBeTruthy();
  });
});
