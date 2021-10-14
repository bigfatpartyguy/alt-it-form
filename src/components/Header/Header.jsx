import React from 'react';
import Logo from './Logo/';
import LoginButton from './LoginButton';
import LanguagePopup from './LanguagePopup';
import MenuButton from './MenuButton';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['header__content']}>
        <Logo />
        <div className={styles['header__controls']}>
          <LoginButton />
          <LanguagePopup />
          <MenuButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
