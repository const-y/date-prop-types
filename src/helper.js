import moment from 'moment';

export const checkDate = (date, format) => {
  if (!date) {
    return true;
  }

  return moment(date, format, true).isValid();
};
