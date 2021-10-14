import React from 'react';
import styles from './FormSection.module.scss';

const FormSection = ({title, children}) => {
  return (
    <section className={styles['form-section']}>
      <p className={styles['form-section__title']}>{title}</p>
      {children}
    </section>
  );
};

export default FormSection;
