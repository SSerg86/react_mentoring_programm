import * as React from 'react';
import { useMoviesContext } from '../../hooks/MoviesContext';

import classes from './ModalWindow.module.css';
import type { ModalWindowProps } from './ModalWindow.types';

const ModalWindow = ({ children }: ModalWindowProps) => {
  const { handleModalWindow, isModalActive } = useMoviesContext();
  const activeClass = isModalActive ? classes.active : '';

  return (
    <div
      aria-hidden
      className={`${classes.root} ${activeClass}`}
      onClick={() => handleModalWindow(false)}
    >
      <div
        aria-hidden
        className={`${classes.content} ${activeClass}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
