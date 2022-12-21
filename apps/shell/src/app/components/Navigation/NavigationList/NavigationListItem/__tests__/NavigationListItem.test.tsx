import { HomeIcon } from '@heroicons/react/20/solid';
import { NavigationListItem } from '../NavigationListItem';
import { render, screen } from '../../../../../utils/testUtils';

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useLocation: jest
    .fn()
    .mockReturnValueOnce({
      pathname: '/home',
    })
    .mockReturnValueOnce({
      pathname: '/',
    }),
}));

describe('components/Navigation/NavigationList/NavigationListItem', () => {
  beforeEach(() => {
    render(<NavigationListItem Icon={HomeIcon} label="Home" to="/home" />);
  });

  it('should indicate current active link if user is on the destination page', () => {
    expect(screen.getByRole('link')).toHaveAttribute('aria-current', 'page');
  });

  it('should not indicate current active link if user is not the destination page', () => {
    expect(screen.getByRole('link')).not.toHaveAttribute('aria-current');
  });
});
