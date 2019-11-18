const { makeRegex } = require('./helper');

const testDate = (date, format) => {
  if (!date) {
    return true;
  }

  const regex = makeRegex(format);

  return regex.test(date);
};

const makeValidator = (isRequired, format) => (props, propName, componentName) => {
  if (isRequired && !props[propName])
    throw Error(
      `Prop '${propName}' marked as isRequired in component '${componentName}' but its value is ${props[propName]}`,
    );

  if (!testDate(props[propName], format)) {
    throw Error(`Invalid prop '${propName}' with value '${props[propName]}' supplied to ${componentName}, exacted date in ${format} format`, );
  }
};

const resultValidator = makeValidator.bind(null, false);

resultValidator.isRequired = makeValidator.bind(null, true);

module.exports = resultValidator;
