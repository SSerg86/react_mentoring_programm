import React from 'react';
import classes from './Footer.module.css';
import { FooterProps } from './Footer.types';

const Footer = ({ imageUrl }: FooterProps) => (
  <div className={classes.footer}>
    <img src={imageUrl} alt='Logo' />
  </div>
);

export default Footer;
