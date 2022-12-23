import { render } from '../utils/testUtils';

import App from '../app';

jest.mock('./app.utils', () => ({
  navigateToSpotify: jest.fn(),
  shouldLoginToSpotify: jest
    .fn()
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(true),
  shouldDisplayApp: jest.fn().mockReturnValue(true),
}));

describe('app', () => {
  let el: HTMLElement;

  beforeEach(() => {
    const { container } = render(<App />);
    el = container;
  });

  it('should render remaining route if user session is active', () => {
    expect(el).not.toBeEmptyDOMElement();
  });

  it('should render nothing if user session is inactive', () => {
    expect(el).toBeEmptyDOMElement();
  });
});
