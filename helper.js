export const specialDateFormat = 'YYYY-MM-DD HH:mm:ss ZZ';
export const dateFormat = 'YYYY-MM-DD';

const patternsMap = {
  [specialDateFormat]: '\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2} [+|-]\\d{4}',
  [dateFormat]: '\\d{4}-\\d{2}-\\d{2}',
};

export function makeRegex(datePattern) {
  return RegExp(patternsMap[datePattern]);
}
