import React from 'react';
import {ReactComponent as LoginIcon} from '../../assets/images/login.svg';
import styles from './LoginButton.module.scss';

const LoginButton = () => {
  return (
    <button className={styles['login-btn']} type="button">
      Войти
      <LoginIcon className={styles['login-btn__icon']} />
    </button>
  );
};

export default LoginButton;
