import * as React from 'react';
import { closeForm } from '../../features/movieFormPopUp/movieFormPopUpSlice';
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
      onClick={() => dispatch(closeForm(false))}
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
