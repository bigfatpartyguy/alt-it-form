const validateInputs = values => {
  const errors = {};
  if (!values.company_name) {
    errors.company_name = 'Обязательное поле';
  }
  if (!values.user_category) {
    errors.user_category = 'Обязательное поле';
  }
  if (!values.user_country) {
    errors.user_country = 'Обязательное поле';
  }
  if (Object.prototype.hasOwnProperty.call(values, 'name') && !values.name) {
    errors.name = 'Обязательное поле';
  }
  if (values.name.length > 50) {
    errors.name = 'Максимальная длина - 50 символов';
  }
  if (
    Object.prototype.hasOwnProperty.call(values, 'surname') &&
    !values.surname
  ) {
    errors.surname = 'Обязательное поле';
  }
  if (values.surname.length > 50) {
    errors.surname = 'Максимальная длина - 50 символов';
  }

  if (
    Object.prototype.hasOwnProperty.call(values, 'position') &&
    !values.position
  ) {
    errors.position = 'Обязательное поле';
  }
  if (
    Object.prototype.hasOwnProperty.call(values, 'corporate_email') &&
    !values.corporate_email
  ) {
    errors.corporate_email = 'Обязательное поле';
  }
  if (
    values.corporate_email &&
    !/^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(values.corporate_email)
  ) {
    errors.corporate_email = 'Неправильный email';
  }
  return errors;
};

export default validateInputs;
