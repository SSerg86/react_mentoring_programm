import * as React from 'react';
import { useMemo } from 'react';
import IconButton from '../IconButton/IconButton';
import LogoPanel from '../LogoPanel/LogoPanel';
import searchIcon from '../../assets/images/search_icon.png';

import classes from './MovieDetails.module.css';
import type { MovieDetailsProps } from './MovieDetails.types';
import { useMoviesContext } from '../../hooks/MoviesContext';

const MovieDetails = ({ logo }: MovieDetailsProps) => {
  const { handleCloseMovieDetails, moviesList, movieIdForDetails } =
    useMoviesContext();

  const movieDetails = useMemo(() => {
    return moviesList.find((movie) => movie.id === movieIdForDetails);
  }, [movieIdForDetails, moviesList]);

  return (
    <div className={classes.root}>
      <LogoPanel imageUrl={logo}>
        <IconButton icon={searchIcon} handleClick={handleCloseMovieDetails} />
      </LogoPanel>
      <div className={classes.content}>
        <img
          className={classes.image}
          src={movieDetails.poster_path}
          alt={movieDetails.title}
        />
        <div className={classes.details}>
          <div className={classes.movie_title_block}>
            <p className={classes.title}>{movieDetails.title}</p>
            <div className={classes.vote}>{movieDetails.vote_average}</div>
          </div>
          <p className={classes.genre}>{movieDetails.genres[0]}</p>
          <div className={classes.release}>
            <div className={classes.release_date}>{movieDetails.release_date}</div>
            <div>{movieDetails.runtime}</div>
          </div>
          <p className={classes.overview}>{movieDetails.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
