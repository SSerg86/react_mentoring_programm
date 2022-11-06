import * as React from 'react';

import classes from './ModalWindow.module.css';
import type { ModalWindowProps } from './ModalWindow.types';

const ModalWindow = ({ active, setActive, children }: ModalWindowProps) => {
  const activeClass = active ? classes.active : '';
  return (
    <div
      aria-hidden
      className={`${classes.root} ${activeClass}`}
      onClick={() => setActive(false)}
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
