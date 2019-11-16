const specialDateFormat = 'YYYY-MM-DD HH:mm:ss ZZ';
const dateFormat = 'YYYY-MM-DD';

const patternsMap = {
  [specialDateFormat]: '\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2} [+|-]\\d{4}',
  [dateFormat]: String('\\d{4}-\\d{2}-\\d{2}'),
};

function makeRegex(format) {
  return RegExp(patternsMap[format]);
}

module.exports = { makeRegex } ;