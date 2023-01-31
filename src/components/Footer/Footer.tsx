import React from 'react';
import heroBannerProps from '../../mocks/heroBanner';
import classes from './Footer.module.css';

const Footer = () => (
  <div className={classes.footer}>
    <img src={heroBannerProps.imageUrl} alt='Logo' />
  </div>
);

export default Footer;
