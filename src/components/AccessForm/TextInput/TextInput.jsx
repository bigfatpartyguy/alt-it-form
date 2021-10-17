import React, {useState} from 'react';
import classNames from 'classnames/bind';
import {ReactComponent as ValidIcon} from '../../../assets/images/valid-icon.svg';
import {ReactComponent as InvalidIcon} from '../../../assets/images/invalid-icon.svg';
import styles from './TextInput.module.scss';

const cx = classNames.bind(styles);

const TextInput = ({
  id,
  type,
  value,
  onChange,
  onBlur,
  errorMsg,
  fullWidth,
  children,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = evt => {
    setTouched(true);
    onBlur(evt);
  };

  const inputClass = cx({
    input: true,
    input_invalid: errorMsg,
    'full-width': fullWidth,
  });
  return (
    <div className={inputClass}>
      <input
        id={id}
        name={id}
        className={styles['input__input-field']}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        required
      />
      <label className={styles['input__label']} htmlFor={id}>
        {children}
      </label>
      {errorMsg ? (
        <div className={styles['input__error-message']}>{errorMsg}</div>
      ) : null}
      <div className={styles['input__validation-icon']}>
        {errorMsg ? <InvalidIcon /> : touched ? <ValidIcon /> : null}
      </div>
    </div>
  );
};

export default TextInput;
