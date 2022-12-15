import React, { useMemo, useState, useEffect } from 'react';
import { fetchMovies } from '../../features/movies/moviesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/contextHook';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard, { MovieCardProps } from '../MovieCard/MovieCard';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

const MoviesGrid = () => {
  const dispatch = useAppDispatch();

  const { moviesList, status } = useAppSelector((state) => state.movies);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

  const [sortOption, setSortOption] = useState<string>('');

  const moviesToRender = useMemo<MovieCardProps[]>(() => {
    return sortOption
      ? moviesList.filter((movie: MovieCardProps) =>
          movie.release_date.includes(sortOption)
        )
      : moviesList;
  }, [moviesList, sortOption]);

  const genreListToRender = getGenresList(moviesList);

  const realeseDateList = getReleaseList(moviesList);

  return (
    <div className={classes.container}>
      <FilterPannel
        genres={genreListToRender}
        realeseDate={realeseDateList}
        numFound={moviesList.length}
        onFilter={setSortOption}
      />
      <div className={classes.movies_grid}>
        {moviesToRender &&
          moviesToRender.map((movie: MovieCardProps) => {
            const movicardProps = {
              ...movie,
            };
            return (
              <ErrorBoundary key={movie.id}>
                <MovieCard key={movie.id} {...movicardProps} />
              </ErrorBoundary>
            );
          })}
      </div>
    </div>
  );
};

export default MoviesGrid;
