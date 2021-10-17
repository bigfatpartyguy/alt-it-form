import React from 'react';
import {ReactComponent as DeleteOptionIcon} from '../../../../assets/images/delete-option.svg';
import styles from './SelectedOption.module.scss';

const SelectedOption = ({option, onClick}) => {
  return (
    <div className={styles['selected-option']}>
      <span className={styles['selected-option__text']}>{option.name}</span>
      <span
        className={styles['selected-option__icon']}
        onClick={() => onClick(option.id)}
      >
        <DeleteOptionIcon />
      </span>
    </div>
  );
};

export default SelectedOption;
