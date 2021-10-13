import React from 'react';
import {ReactComponent as Logo} from '../../assets/images/logo.svg';
import LoginButton from '../LoginButton';
import LanguagePopup from '../LanguagePopup';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__content']}>
        <div className={styles['header__logo']}>
          <Logo />
        </div>
        <div className={styles['header__controls']}>
          <LoginButton />
          <LanguagePopup />
        </div>
      </div>
    </header>
  );
};

export default Header;
