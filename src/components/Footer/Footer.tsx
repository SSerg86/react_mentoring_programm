import React from 'react';
import classes from './Footer.module.css';

interface FooterProps {
  imageUrl: string;
}

const Footer = ({ imageUrl }: FooterProps) => (
  <div className={classes.footer}>
    <img src={imageUrl} alt='Logo' />
  </div>
);

export default Footer;
