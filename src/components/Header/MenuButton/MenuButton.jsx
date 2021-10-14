import React from 'react';
import {ReactComponent as MenuIcon} from '../../../assets/images/menu.svg';
import styles from './MenuButton.module.scss';

const MenuButton = () => <MenuIcon className={styles['menu-btn']} />;

export default MenuButton;
