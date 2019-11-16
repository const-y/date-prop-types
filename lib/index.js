const { makeRegex } = require('./helper');

export const testDate = (date, pattern) => {
  if (!date) {
    return true;
  }

  const regex = makeRegex(pattern);

  return regex.test(date);
};
export const regexValidator = (isRequired, props, propName, componentName) => {
  if (isRequired && !props[propName])
    return new Error(
      `Prop '${propName}' marked as isRequired in component '${componentName}' but its value is ${props[propName]}`,
    );

  if (!testDate(props[propName], pattern)) {
    return new Error(`Invalid prop '${propName}' with value '${props[propName]}' supplied to ${componentName}, exacted date in ${pattern} format`, );
  }
};

regexValidator.isRequired = regexValidator.bind(null, true);

module.exports = regexValidator.bind(null, false);
