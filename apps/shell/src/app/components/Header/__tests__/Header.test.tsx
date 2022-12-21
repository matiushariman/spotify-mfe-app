import { render, screen, waitFor } from '../../../utils/testUtils';

import { Header } from '../Header';

describe('components/Header', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should render user profile', async () => {
    //  loading spinner is displayed
    expect(screen.getByRole('status')).toBeVisible();

    //  user profile is displayed
    await waitFor(() =>
      expect(screen.getByLabelText(/user profile/i)).toBeVisible()
    );
  });
});
