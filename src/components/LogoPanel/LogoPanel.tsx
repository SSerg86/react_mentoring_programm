import * as React from 'react';
import heroBannerProps from '../../mocks/heroBanner';

import classes from './LogoPanel.module.css';
import type { LogoPanelProps } from './LogoPanel.types';

const LogoPanel = ({ children }: LogoPanelProps) => {
  return (
    <div className={classes.root}>
      <img src={heroBannerProps.imageUrl} alt='Logo' />
      {children}
    </div>
  );
};

export default LogoPanel;
