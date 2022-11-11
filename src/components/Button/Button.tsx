import * as React from 'react';

import classes from './Button.module.css';
import type { ButtonProps } from './Button.types';

const Button = ({ inputValue, inputType, handleClcik }: ButtonProps) => {
  return (
    <input
      className={classes.root}
      onClick={handleClcik}
      type={inputType}
      value={inputValue}
    />
  );
};

export default Button;
