# date-prop-types

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
