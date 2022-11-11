import * as React from 'react';
import IconButton from '../IconButton/IconButton';
import LogoPanel from '../LogoPanel/LogoPanel';
import search_icon from '../../assets/images/search_icon.png';

import classes from './MovieDetails.module.css';
import type { MovieDetailsProps } from './MovieDetails.types';

const MovieDetails = ({
  logo,
  poster_path,
  title,
  vote_average,
  genre,
  release_date,
  runtime,
  overview,
  handleClick,
}: MovieDetailsProps) => {
  return (
    <div className={classes.root}>
      <LogoPanel imageUrl={logo}>
        <IconButton icon={search_icon} handleClick={handleClick} />
      </LogoPanel>
      <div className={classes.content}>
        <img className={classes.image} src={poster_path} alt={title} />
        <div className={classes.details}>
          <div className={classes.movie_title_block}>
            <p className={classes.title}>{title}</p>
            <div className={classes.vote}>{vote_average}</div>
          </div>
          <p className={classes.genre}>{genre}</p>
          <div className={classes.release}>
            <div className={classes.release_date}>{release_date}</div>
            <div>{runtime}</div>
          </div>
          <p className={classes.overview}>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
