import { useGetFollowedArtists } from '..';

import { renderHook, wrapper, waitFor } from '../../../utils/testUtils';

describe(useGetFollowedArtists, () => {
  it('should return followed artists response', async () => {
    const { result } = renderHook(() => useGetFollowedArtists(), {
      wrapper,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toMatchSnapshot();
  });
});
