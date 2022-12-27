import { FollowedArtists } from '../FollowedArtists';
import { render, screen, waitFor } from '../../../utils/testUtils';

describe(FollowedArtists, () => {
  beforeEach(() => {
    render(<FollowedArtists />);
  });

  it('should render followed artists', async () => {
    //  loading spinner is displayed
    expect(screen.getByText(/loading/i)).toBeVisible();

    //  recently played is displayed
    await waitFor(() =>
      expect(screen.getByLabelText(/followed artists/i)).toBeVisible()
    );
  });
});
