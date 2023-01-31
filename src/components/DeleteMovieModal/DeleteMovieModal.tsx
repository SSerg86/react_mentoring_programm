import * as React from 'react';
import Button from '../Button/Button';

import classes from './DeleteMovieModal.module.css';
import type { DeleteMovieModalProps } from './DeleteMovieModal.types';

const DeleteMovieModal = ({ title, description }: DeleteMovieModalProps) => {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log('confirm');
  };
  return (
    <div className={classes.root}>
      <p className={classes.title}>{title}</p>
      <p className={classes.description}>{description}</p>
      <div className={classes.button}>
        <Button inputValue='Confirm' inputType='button' handleClick={handleClick} />
      </div>
    </div>
  );
};

export default DeleteMovieModal;
