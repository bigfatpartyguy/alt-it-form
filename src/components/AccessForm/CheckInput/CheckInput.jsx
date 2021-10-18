import React from 'react';
import classNames from 'classnames/bind';
import styles from './CheckInput.module.scss';

const cx = classNames.bind(styles);

const CheckInput = ({id, value, onChange, onBlur, error, children}) => {
  const inputClass = cx({
    'check-input': true,
    error: error,
  });
  const handleChange = evt => {
    onChange({target: {name: id, value: evt.target.checked}});
    onBlur(evt);
  };
  console.log(error);
  return (
    <div className={inputClass}>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={value}
        onChange={handleChange}
        onBlur={onBlur}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
};

export default CheckInput;
