const validator = require('../lib');
const propName = 'date';

describe('main (index)', () => {
  [null, undefined].forEach(value => {
    it(value + ' is correct if is not required', () => {
      const props = {
        [propName]: value,
      };
      const result = validator(props, propName);

      expect(result).toBe(undefined);
    });
  });

  [null, undefined].forEach(value => {
    it('should throw error on ' + value, () => {
      const props = {
        [propName]: value,
      };
      const result = validator.isRequired(props, propName);

      expect(result).toThrow();
    });
  });
});