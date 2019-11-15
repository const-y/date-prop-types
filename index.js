import { makeRegex } from './helper';

export const testDate = (date, pattern) => {
  if (!date) {
    return true;
  }

  const regex = makeRegex(pattern);

  return regex.test(date);
};

export const regexValidator = pattern => (props, propName, componentName) => {
  if (!testDate(props[propName], pattern)) {
    return new Error(`Invalid prop '${propName}' with value '${props[propName]}' supplied to ${componentName}, exacted date in ${pattern} format`, );
  }
};

const validator = regexValidator(pattern);

validator.isRequired = (props, propName, componentName) => {
  if (!props[propName]) {
    return new Error(
      `Prop '${propName}' marked as isRequired in component '${componentName}' but its value is ${props[propName]}`,
    );
  }

  return regexValidator(props, propName, componentName);
};

export default validator;
