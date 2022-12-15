import * as React from 'react';
import { handleModalWindow } from '../../features/modalWindow/modalWindowSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/contextHook';

import classes from './ModalWindow.module.css';
import type { ModalWindowProps } from './ModalWindow.types';

const ModalWindow = ({ children }: ModalWindowProps) => {
  const { isModalActive } = useAppSelector((state) => state.modalWindow);
  const dispatch = useAppDispatch();
  const activeClass = isModalActive ? classes.active : '';

  return (
    <div
      aria-hidden
      className={`${classes.root} ${activeClass}`}
      onClick={() => dispatch(handleModalWindow(false))}
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
