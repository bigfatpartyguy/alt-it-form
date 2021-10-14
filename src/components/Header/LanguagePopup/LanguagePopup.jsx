import React from 'react';
import {ReactComponent as LanguageIcon} from '../../../assets/images/language.svg';
import {ReactComponent as TriangleIcon} from '../../../assets/images/triangle.svg';
import styles from './LanguagePopup.module.scss';

const LanguagePopup = () => {
  return (
    <button className={styles['popup-btn']} type="button">
      <LanguageIcon />
      <span className={styles['popup-btn__text']}>RU</span>
      <TriangleIcon />
    </button>
  );
};

export default LanguagePopup;
