var helper = require('./helper');

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

  if (!helper.checkDate(props[propName], format)) {
    throw Error(`Invalid prop '${propName}' with value '${props[propName]}' supplied to ${componentName}, exacted date in ${format} format`, );
  }
}

function makeValidator(format) {
  var resultValidator = validator.bind(null, format, false);

  resultValidator.isRequired = validator.bind(null, format, true);

  return resultValidator;
}

module.exports = makeValidator;
