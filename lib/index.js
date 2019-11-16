const { makeRegex } = require('./helper');

const testDate = (date, pattern) => {
  if (!date) {
    return true;
  }

  const regex = makeRegex(pattern);

  return regex.test(date);
};
function regexValidator(isRequired, props, propName, componentName) {
  if (isRequired && !props[propName])
    return new Error(
      `Prop '${propName}' marked as isRequired in component '${componentName}' but its value is ${props[propName]}`,
    );

  if (!testDate(props[propName])) {
    return new Error(`Invalid prop '${propName}' with value '${props[propName]}' supplied to ${componentName}, exacted date in ${pattern} format`, );
  }
}

const resultValidator = regexValidator.bind(null, false);

resultValidator.isRequired = regexValidator.bind(null, true);

module.exports = resultValidator;
