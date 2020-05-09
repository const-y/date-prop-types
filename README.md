# date-prop-types [![Build Status](https://travis-ci.com/const-y/date-prop-types.svg?branch=master)](https://travis-ci.com/const-y/date-prop-types)

A validator that you can use to verify that the formatted date that your React component receives has the specified format.
## Installation
```shell
npm install date-prop-types --save-dev
```

## Usage
```javascript
import date from 'date-prop-types';

MyComponent.propTypes = {
  hiringDate: date('YYYY-DD-MM').isRequired,
  dateOfDismissal: date('YYYY-DD-MM')
};
````
## License
This project is licensed under the MIT License
