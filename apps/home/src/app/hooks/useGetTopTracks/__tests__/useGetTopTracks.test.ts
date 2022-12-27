import { useGetTopTracks } from '..';

import { renderHook, wrapper, waitFor } from '../../../utils/testUtils';

describe('components/hooks/useGetTopTracks', () => {
  it('should return top tracks response', async () => {
    const { result } = renderHook(() => useGetTopTracks(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toMatchSnapshot();
  });
});
