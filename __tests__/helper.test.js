const { makeRegex } = require('../lib/helper');

describe('helper', () => {
  describe('makeRegex', () => {
    it('specialDateFormat', () => {
      const regex = makeRegex('YYYY-MM-DD HH:mm:ss ZZ');

      expect(regex).toEqual(
        RegExp('\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2} [+|-]\\d{4}')
      );
    });

    it('dateFormat', () => {
      const regex = makeRegex('YYYY-MM-DD');

      expect(regex).toEqual(
        RegExp('\\d{4}-\\d{2}-\\d{2}')
      );
    })
  });
});