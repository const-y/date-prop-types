const helper = require('../lib/helper');

describe('helper', () => {
  describe('checkDate', () => {
    const testVariants = [
      {
        example: '2019-11-01 00:00:00 +0300',
        format: 'YYYY-MM-DD',
        exact: false,
      },
      {
        example: '2019-11-01 00:00:00 +0300',
        format: 'YYYY-MM-DD HH:mm:ss ZZ',
        exact: true,
      },
      {
        example: '2019-11-01',
        format: 'YYYY-MM-DD HH:mm:ss ZZ',
        exact: false,
      },
      {
        example: '2019-11-01',
        format: 'YYYY-MM-DD',
        exact: true,
      },
      {
        example: '01/11/2019',
        format: 'DD/MM/YYYY',
        exact: true,
      },
      {
        example: '01/11/2019',
        format: 'DD.MM.YYYY',
        exact: false,
      },
      {
        example: '01.11.2019',
        format: 'DD.MM.YYYY',
        exact: true,
      },
      {
        example: '01.11.2019',
        format: 'HH:mm:ss',
        exact: false,
      },
      {
        example: '22:11:15',
        format: 'HH:mm:ss',
        exact: true,
      },
    ];

    testVariants.forEach(item => {
      const { example, format, exact } = item;

      it(`${example} ${exact ? 'is' : 'isn\'t'} ${format}`, () => {
        const result = helper.checkDate(example, format);

        expect(result).toBe(exact)
      })
    });

  })
});