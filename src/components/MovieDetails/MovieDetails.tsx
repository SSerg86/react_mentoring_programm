import * as React from 'react';
import IconButton from '../IconButton/IconButton';
import LogoPanel from '../LogoPanel/LogoPanel';
import searchIcon from '../../assets/images/search_icon.png';

import classes from './MovieDetails.module.css';
import type { MovieDetailsProps } from './MovieDetails.types';
import { useAppDispatch, useAppSelector } from '../../hooks/contextHook';
import { handleCloseMovieDetails } from '../../features/modalWindow/modalWindowSlice';

const MovieDetails = ({ logo }: MovieDetailsProps) => {
  const { movieInfo, status } = useAppSelector((state) => state.movieDetails);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(handleCloseMovieDetails());
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.root}>
      <LogoPanel imageUrl={logo}>
        <IconButton icon={searchIcon} handleClick={handleClick} />
      </LogoPanel>
      <div className={classes.content}>
        <img
          className={classes.image}
          src={movieInfo?.poster_path}
          alt={movieInfo?.title}
        />
        <div className={classes.details}>
          <div className={classes.movie_title_block}>
            <p className={classes.title}>{movieInfo.title}</p>
            <div className={classes.vote}>{movieInfo.vote_average}</div>
          </div>
          <p className={classes.genre}>{movieInfo?.genres[0]}</p>
          <div className={classes.release}>
            <div className={classes.release_date}>{movieInfo?.release_date}</div>
            <div>{movieInfo?.runtime}</div>
          </div>
          <p className={classes.overview}>{movieInfo?.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
