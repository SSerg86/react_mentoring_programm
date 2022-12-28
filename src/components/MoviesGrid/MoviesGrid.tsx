import React, { useState, useEffect } from 'react';
import { fecthSortedMovies, fetchMovies } from '../../features/movies/moviesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/contextHook';
import { useFetchAllMoviesQuery } from '../../services/MoviesService';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../MovieCard/MovieCard.types';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

const MoviesGrid = () => {
  // regular Redux Toolkit
  const dispatch = useAppDispatch();
  // const { moviesList, status } = useAppSelector((state) => state.movies);

  // useEffect(() => {
  //   if (status === 'idle') {
  //     dispatch(fetchMovies());
  //   }
  // }, [dispatch, status]);

  const [sortOption, setSortOption] = useState<string>('Release date');

  // using RTKQuery
  const { data: moviesList, isLoading, error } = useFetchAllMoviesQuery('2018');

  // const { data: moviesList } = data ?? {};

  const genreListToRender = moviesList && getGenresList(moviesList);
  const realeseDateList = moviesList && getReleaseList(moviesList);

  const handleFiltering = (val: string) => {
    setSortOption(val);
    dispatch(fecthSortedMovies(val));
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {/* {status === 'loading' ? ( */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.container}>
          <FilterPannel
            genres={genreListToRender}
            realeseDate={realeseDateList}
            numFound={moviesList.length}
            onFilter={handleFiltering}
            optionValue={sortOption}
          />
          <div className={classes.movies_grid}>
            {moviesList &&
              moviesList.map((movie: IMovie) => {
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
