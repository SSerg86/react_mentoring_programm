import * as React from 'react';

import classes from './IconButton.module.css';
import type { IconButtonProps } from './IconButton.types';

const IconButton = ({ icon, handleClick }: IconButtonProps) => {
  return (
    <button className={classes.root} type='button' onClick={handleClick}>
      <img src={icon} alt='icon' className={classes.icon} />
    </button>
  );
};

export default IconButton;
