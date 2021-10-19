import React from 'react';
import Modal from 'react-modal';
import classNames from 'classnames/bind';
import {ReactComponent as CloseIcon} from '../../../assets/images/clear-select.svg';
import styles from './CommonModal.module.scss';

const cx = classNames.bind(styles);

Modal.setAppElement('#root');

export default function CommonModal(props) {
  const {children, isOpen, handleCloseModal, contentLabel, error} = props;

  const modClass = cx({
    modal: true,
    error: error,
  });

  return (
    <Modal
      className={modClass}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel={contentLabel}
    >
      <button
        type="button"
        className={styles['modal__close-icon']}
        onClick={handleCloseModal}
      >
        <CloseIcon />
      </button>
      {children}
    </Modal>
  );
}
