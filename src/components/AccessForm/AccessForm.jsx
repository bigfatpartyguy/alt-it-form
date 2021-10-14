import React from 'react';
import styles from './AccessForm.module.scss';

const AccessForm = () => {
  return (
    <form className={styles['form']}>
      <p className={styles['form-title']}>Заполните контактные данные</p>
      <fieldset>
        <legend>Юридическое лицо</legend>
      </fieldset>
    </form>
  );
};

export default AccessForm;
