import React from 'react';
import styles from './TextInput.module.scss';

const TextInput = ({id, type, children}) => {
  return (
    <div className={styles['input']}>
      <input
        id={id}
        className={styles['input__input-field']}
        type={type}
        required
      />
      <label className={styles['input__label']} htmlFor={id}>
        {children}
      </label>
    </div>
  );
};

export default TextInput;
