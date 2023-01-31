import React, { useState, useEffect } from 'react';
import { requestMovies } from '../../features/movies/moviesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/contextHook';
import FilterPanel from '../FilterPanel/FilterPanel';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../MovieCard/MovieCard.types';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

const MoviesGrid = () => {
  const dispatch = useAppDispatch();
  const { moviesList, status, isInitialRequest } = useAppSelector(
    (state) => state.movies
  );
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(requestMovies());
    }
    if (status === 'succeeded' && isInitialRequest) {
      setGenres(getGenresList(moviesList));
    }
  }, [dispatch, isInitialRequest, moviesList, status]);

  const releaseDateList = moviesList && getReleaseList(moviesList);

  return (
    <div className={classes.container}>
      <FilterPanel genres={genres} releaseDate={releaseDateList} />
      <div className={classes.movies_grid}>
        {moviesList &&
          moviesList?.map((movie: IMovie) => {
            const movieCardProps = {
              ...movie,
            };
            return <MovieCard key={movie.id} {...movieCardProps} />;
          })}
      </div>
    </div>
  );
};

export default MoviesGrid;
