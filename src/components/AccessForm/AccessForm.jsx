import React from 'react';
import styles from './AccessForm.module.scss';

const AccessForm = ({children}) => {
  return (
    <form className={styles['form']}>
      <p className={styles['form-title']}>Заполните контактные данные</p>
      {children}
    </form>
  );
};

export default AccessForm;
