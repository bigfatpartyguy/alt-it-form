const validateInputs = values => {
  const errors = {};
  if (Object.prototype.hasOwnProperty.call(values, 'name') && !values.name) {
    errors.name = 'Обязательное поле';
  }
  if (
    Object.prototype.hasOwnProperty.call(values, 'surname') &&
    !values.surname
  ) {
    errors.surname = 'Обязательное поле';
  }
  if (
    Object.prototype.hasOwnProperty.call(values, 'position') &&
    !values.position
  ) {
    errors.position = 'Обязательное поле';
  }
  if (Object.prototype.hasOwnProperty.call(values, 'email') && !values.email) {
    errors.email = 'Обязательное поле';
  }
  if (
    values.email &&
    !/^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(values.email)
  ) {
    errors.email = 'Неправильный email';
  }
  return errors;
};

export default validateInputs;
