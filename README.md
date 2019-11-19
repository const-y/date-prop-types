# date-prop-types
[![Build Status](https://travis-ci.com/const-y/date-prop-types.svg?branch=master)](https://travis-ci.com/const-y/date-prop-types)

Validators for use with react propTypes

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
