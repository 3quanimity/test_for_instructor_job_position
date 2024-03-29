const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePictureInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.url = !isEmpty(data.url) ? data.url : '';

  if (!validator.isLength(data.title, { min: 3, max: 30 })) {
    errors.title = 'Title must be between 3 and 30 characters';
  }

  if (validator.isEmpty(data.title)) {
    errors.title = 'Title field is required';
  }
  if (validator.isEmpty(data.url)) {
    errors.url = 'URL field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
