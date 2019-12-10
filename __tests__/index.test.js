import validator from '../src';

const propName = 'date';
const defaultFormat = 'YYYY-MM-DD';

describe('main (index)', () => {
  [null, undefined].forEach(value => {
    it(value + ' is correct if is not required', () => {
      const props = {
        [propName]: value,
      };
      const result = validator(defaultFormat)(props, propName);

      expect(result).toBe(undefined);
    });
  });

  [null, undefined].forEach(value => {
    it('should throw error on ' + value, () => {
      const props = {
        [propName]: value,
      };
      const result = () => {
        validator(defaultFormat).isRequired(props, propName);
      };

      expect(result).toThrow();
    });
  });
});
