import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Button.module.css';

const Button = ({ buttonText, to }) => {
  return (
    <div className={styles.center}><ScrollLink to={to} smooth={true} duration={1000} offset={-100}>
    <button className={styles.button}> {buttonText}</button>
    </ScrollLink></div>
  );
};

export default Button;