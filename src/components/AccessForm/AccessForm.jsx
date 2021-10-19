import React from 'react';
import styles from './AccessForm.module.scss';

const AccessForm = ({canSubmit, onSubmit, children}) => {
  return (
    <form className={styles['form']} onSubmit={onSubmit}>
      <p className={styles['form-title']}>Заполните контактные данные</p>
      <div className={styles['form__form-elements']}>{children}</div>
      <hr />
      <div className={styles['form__form-footer']}>
        <p>
          Нажимая кнопку “Запросить демо-доступ” вы принимаете пользовательское
          соглашение и согласны с правилами использования и обработки
          персональных данных
        </p>
        <button
          type="submit"
          className={styles['form__submit-btn']}
          disabled={canSubmit}
        >
          Отправить заявку
        </button>
      </div>
    </form>
  );
};

export default AccessForm;
