import React from 'react';
import classes from './GenreOptionsList.module.css';

interface Props {
  children: React.ReactNode;
}

const GenreOptionsList = ({ children }: Props) => (
  <div className={classes.options}>{children}</div>
);

export default GenreOptionsList;
