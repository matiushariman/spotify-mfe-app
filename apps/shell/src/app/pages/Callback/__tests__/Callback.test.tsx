import { Callback } from '../Callback';
import { render } from '../../../../utils/testUtils';

const mockSetTokenFromUrlParams = jest.fn();

jest.mock('./Callback.utils', () => ({
  setTokenFromUrlParams: () => mockSetTokenFromUrlParams(),
}));

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: jest.fn(),
  useLocation: jest.fn().mockReturnValue({
    hash: '#access_token=abcd&',
  }),
}));

describe('pages/Callback', () => {
  beforeEach(() => {
    render(<Callback />);
  });

  it('should call setTokenFromUrlParams if hash exists', () => {
    expect(mockSetTokenFromUrlParams).toHaveBeenCalled();
  });
});
