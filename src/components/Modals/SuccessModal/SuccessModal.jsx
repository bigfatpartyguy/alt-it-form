import React from 'react';
import CommonModal from '../CommonModal';
import {ReactComponent as SuccessIcon} from '../../../assets/images/success-submit.svg';
import styles from './SuccessModal.module.scss';

const SuccessModal = ({isOpen, closeModal, label}) => {
  return (
    <CommonModal
      isOpen={isOpen}
      handleCloseModal={closeModal}
      contentLabel={label}
    >
      <SuccessIcon />
      <h2 className={styles['modal-title']}>Ваш запрос успешно отправлен</h2>
      <p className={styles['modal-text']}>
        После обработки запроса, на указанный e-mail будет выслана вся
        необходимая информация для получения демо-доступа
      </p>
      <button
        className={styles['modal-btn']}
        type="button"
        onClick={closeModal}
      >
        Вернуться на главную
      </button>
    </CommonModal>
  );
};

export default SuccessModal;
