const moment = require('moment');

const checkDate = (date, format) => {
  if (!date) {
    return true;
  }

  return moment(date, format, true).isValid();
};

/**
 * unbound pops validator
 * @param format
 * @param isRequired
 * @param props
 * @param propName
 * @param componentName
 */
function validator(format, isRequired, props, propName, componentName) {
  if (isRequired && !props[propName]) {
    throw Error(
      `Prop '${propName}' marked as isRequired in component '${componentName}' but its value is ${props[propName]}`,
    );
  }

  if (!checkDate(props[propName], format)) {
    throw Error(`Invalid prop '${propName}' with value '${props[propName]}' supplied to ${componentName}, exacted date in ${format} format`, );
  }
}

function makeValidator(format) {
  const resultValidator = validator.bind(null, format, false);

  resultValidator.isRequired = validator.bind(null, format, true);

  return resultValidator;
}

module.exports = makeValidator;
