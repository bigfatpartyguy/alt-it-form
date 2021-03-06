import {useState, useEffect} from 'react';

const useFormValidation = (initialState, validationFunc, btnDisablefunc) => {
  const [values, setValues] = useState(initialState);
  const [touched, setTouched] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const validationErrors = validationFunc(values);
    if (Object.keys(validationErrors).length > 0) {
      btnDisablefunc(true);
    } else {
      btnDisablefunc(false);
    }
  }, [values]);

  useEffect(() => {
    const validationErrors = validationFunc(values);
    const touchedErrors = Object.keys(validationErrors)
      .filter(key => touched.includes(key))
      .reduce((acc, key) => {
        acc[key] = validationErrors[key];
        return acc;
      }, {});
    setErrors(touchedErrors);
  }, [touched, validationFunc, values]);

  const handleBlur = event => {
    if (!touched.includes(event.target.name)) {
      setTouched([...touched, event.target.name]);
    }
  };

  const handleSubmit = (event, onSubmit) => {
    event.preventDefault();
    const validationErrors = validationFunc(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const submittedData = {...values};
    onSubmit(submittedData);
    setValues(initialState);
    setErrors({});
    setTouched([]);
  };

  return [values, handleChange, handleBlur, handleSubmit, errors];
};

export default useFormValidation;
