import { displayTrackName, displayArtistName } from '../nameUtils';

describe('utils/nameUtils', () => {
  describe(displayTrackName, () => {
    it('should render full track name if track name length < 15', () => {
      expect(displayTrackName('abc')).toEqual('abc');
    });

    it('should render truncated track name if track name length > 15', () => {
      expect(displayTrackName('abcdefghijklmnop')).toEqual(
        'abcdefghijklmno...'
      );
    });
  });

  describe(displayArtistName, () => {
    it('should render full artist name if artist name length < 23', () => {
      expect(displayArtistName('abc')).toEqual('abc');
    });

    it('should render truncated artist name if artist name length > 15', () => {
      expect(displayArtistName('abcdefghijklmnopqrstuvwx')).toEqual(
        'abcdefghijklmnopqrstuvw...'
      );
    });
  });
});
