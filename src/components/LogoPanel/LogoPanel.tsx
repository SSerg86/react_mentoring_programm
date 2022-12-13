import * as React from 'react';

import classes from './LogoPanel.module.css';
import type { LogoPanelProps } from './LogoPanel.types';

const LogoPanel = ({ imageUrl, children }: LogoPanelProps) => {
  return (
    <div className={classes.root}>
      <img src={imageUrl} alt='Logo' />
      {children}
    </div>
  );
};

export default LogoPanel;
