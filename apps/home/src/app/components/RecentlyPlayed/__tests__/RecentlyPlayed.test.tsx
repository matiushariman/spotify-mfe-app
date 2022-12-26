import { RecentlyPlayed } from '../RecentlyPlayed';
import { render, screen, waitFor } from '../../../utils/testUtils';

describe('components/RecentlyPlayed', () => {
  beforeEach(() => {
    render(<RecentlyPlayed />);
  });

  it('should render recently played tracks', async () => {
    //  loading spinner is displayed
    expect(screen.getByText(/loading/i)).toBeVisible();

    //  recently played is displayed
    await waitFor(() =>
      expect(screen.getByLabelText(/recently played tracks/i)).toBeVisible()
    );
  });
});
