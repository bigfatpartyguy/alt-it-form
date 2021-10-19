import React from 'react';
import {ReactComponent as DevLogo} from '../../assets/images/developer-logo.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer__content']}>
        <div className={styles['footer__content__info']}>
          <p>2020 Export.Link</p>
          <a href="#">Соглашение о пользовании информационной системой</a>
        </div>
        <DevLogo />
      </div>
    </footer>
  );
};

export default Footer;
