const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.surName = !isEmpty(data.surName) ? data.surName : '';
  data.birthYear = !isEmpty(data.birthYear) ? data.birthYear : '';
  data.birthPlace = !isEmpty(data.birthPlace) ? data.birthPlace : '';

  if (!validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = 'Name must be between 3 and 30 characters';
  }

  if (validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }
  if (validator.isEmpty(data.surName)) {
    errors.surName = 'Surname field is required';
  }
  if (validator.isEmpty(data.birthYear)) {
    errors.birthYear = 'Birth Year field is required';
  }
  if (validator.isEmpty(data.birthPlace)) {
    errors.birthPlace = 'Birth Place field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
