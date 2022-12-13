import * as React from 'react';

import classes from './IconButton.module.css';
import type { IconButtonProps } from './IconButton.types';

const IconButton = ({ icon, handleClick, isRound = false }: IconButtonProps) => {
  const classForRoundIcon = isRound ? classes.round : '';
  return (
    <button
      className={`${classes.root}  ${classForRoundIcon}`}
      type='button'
      onClick={handleClick}
    >
      <img src={icon} alt='icon' className={classes.icon} />
    </button>
  );
};

export default IconButton;
