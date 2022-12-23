import { TopTracks } from '../TopTracks';
import { render, screen, waitFor } from '../../../utils/testUtils';

describe('components/TopTracks', () => {
  beforeEach(() => {
    render(<TopTracks />);
  });

  it('should render top tracks', async () => {
    //  loading spinner is displayed
    expect(screen.getByText(/loading/i)).toBeVisible();

    //  recently played is displayed
    await waitFor(() =>
      expect(screen.getByLabelText(/top tracks/i)).toBeVisible()
    );
  });
});
