var moment = require('moment');

var checkDate = (date, format) => {
  if (!date) {
    return true;
  }

  return moment(date, format, true).isValid();
};

module.exports = {
  checkDate,
};
