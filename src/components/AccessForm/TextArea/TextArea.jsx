import React from 'react';
import styles from './TextArea.module.scss';

const TextArea = ({id, placeholder}) => {
  return (
    <textarea
      className={styles['textarea']}
      name={id}
      id={id}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
