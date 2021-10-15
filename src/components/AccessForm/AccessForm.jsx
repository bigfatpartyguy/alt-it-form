import React from 'react';
import styles from './AccessForm.module.scss';

const AccessForm = ({children}) => {
  return (
    <form className={styles['form']}>
      <p className={styles['form-title']}>Заполните контактные данные</p>
      <div className={styles['form__form-elements']}>{children}</div>
    </form>
  );
};

export default AccessForm;
