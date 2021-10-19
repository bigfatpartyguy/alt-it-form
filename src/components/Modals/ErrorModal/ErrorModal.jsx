import React from 'react';
import CommonModal from '../CommonModal';
import styles from './ErrorModal.module.scss';

const ErrorModal = ({isOpen, closeModal, label, message}) => {
  return (
    <CommonModal
      isOpen={isOpen}
      handleCloseModal={closeModal}
      contentLabel={label}
      error
    >
      <h2 className={styles['modal-title']}>{message}</h2>
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

export default ErrorModal;
