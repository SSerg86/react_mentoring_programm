import React, { useState, useEffect, useMemo, useCallback } from 'react';
// import { fecthSortedMovies, fetchMovies } from '../../features/movies/moviesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/contextHook';
import {
  useFetchAllMoviesQuery,
  useLazyFetchSortedMoviesQuery,
} from '../../store/services/movies.api';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../MovieCard/MovieCard.types';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

const MoviesGrid = () => {
  // regular Redux Toolkit
  // const dispatch = useAppDispatch();
  // const { moviesList, status } = useAppSelector((state) => state.movies);

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchMovies());
  //   }
  // }, [dispatch, status]);

  const [sortOption, setSortOption] = useState<string>('Release date');

  // using RTKQuery
  const { data: moviesList, isLoading } = useFetchAllMoviesQuery('');
  const [fetchMovies, { data: sortedMovies, isLoading: isSortedLoading }] =
    useLazyFetchSortedMoviesQuery();

  const handleFiltering = useCallback(
    (val: string) => {
      setSortOption(val);
      fetchMovies(val);
      // dispatch(fecthSortedMovies(val));
    },
    [fetchMovies]
  );

  const moviesToRender = useMemo(() => {
    return sortedMovies?.length > 0 ? sortedMovies : moviesList;
  }, [moviesList, sortedMovies]);

  const genreListToRender = moviesToRender && getGenresList(moviesToRender);
  const realeseDateList = moviesToRender && getReleaseList(moviesToRender);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {/* {status === 'loading' ? ( */}
      {isLoading || isSortedLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.container}>
          <FilterPannel
            genres={genreListToRender}
            realeseDate={realeseDateList}
            numFound={moviesToRender?.length}
            onFilter={handleFiltering}
            optionValue={sortOption}
          />
          <div className={classes.movies_grid}>
            {moviesToRender &&
              moviesToRender?.map((movie: IMovie) => {
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
      )}
    </>
  );
};

export default MoviesGrid;
