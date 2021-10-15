import React from 'react';
import classNames from 'classnames/bind';
import styles from './TextInput.module.scss';

const cx = classNames.bind(styles);

const TextInput = ({id, type, value, onChange, onBlur, errorMsg, children}) => {
  console.log(errorMsg);
  const inputClass = cx({input: true, input_invalid: errorMsg});
  return (
    <div className={inputClass}>
      <input
        id={id}
        name={id}
        className={styles['input__input-field']}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required
      />
      <label className={styles['input__label']} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default TextInput;
