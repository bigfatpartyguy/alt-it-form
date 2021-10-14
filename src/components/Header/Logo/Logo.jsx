import React from 'react';
import {ReactComponent as LogoIcon} from '../../../assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo = () => {
  return (
    <div className={styles['logo']}>
      <LogoIcon className={styles['logo__icon']} />
      <p className={styles['logo__text']}>
        система поддержки принятия решений <br /> для международной торговли
      </p>
    </div>
  );
};

export default Logo;
