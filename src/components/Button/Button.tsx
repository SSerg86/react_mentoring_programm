import * as React from 'react';

import classes from './Button.module.css';
import type { ButtonProps } from './Button.types';

const Button = ({ inputValue, inputType, handleClick }: ButtonProps) => {
  return (
    <input
      className={classes.root}
      onClick={handleClick}
      type={inputType}
      value={inputValue}
    />
  );
};

export default Button;
