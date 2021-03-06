import React from 'react';
import styles from './FormSection.module.scss';

const FormSection = ({title, children}) => {
  return (
    <section className={styles['form-section']}>
      {title ? <p className={styles['form-section__title']}>{title}</p> : null}
      <div className={styles['form-section__form-elements']}>{children}</div>
    </section>
  );
};

export default FormSection;
