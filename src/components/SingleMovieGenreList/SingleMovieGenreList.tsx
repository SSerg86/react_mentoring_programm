import React from 'react';

import classes from './SingleMovieGenreList.module.css';

interface Props {
  children: React.ReactNode;
}

const SingleMovieGenreList = ({ children }: Props) => (
  <div className={classes.list}>{children}</div>
);

export default SingleMovieGenreList;
