import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../features/movies/moviesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/contextHook';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard from '../MovieCard/MovieCard';
import { IMovie } from '../MovieCard/MovieCard.types';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

const MoviesGrid = () => {
  // regular Redux Toolkit
  // =====================
  const dispatch = useAppDispatch();
  const { moviesList, status } = useAppSelector((state) => state.movies);
  const [genres, setGenres] = useState<string[]>([]);
  const [initialRequest, setInitialRequest] = useState<boolean>(false);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
      setInitialRequest(true);
    }
    if (status === 'succeeded' && initialRequest) {
      setGenres(getGenresList(moviesList));
      setInitialRequest(false);
    }
  }, [dispatch, initialRequest, moviesList, status]);

  // RTKQuery aproach
  // ================
  // const { data: moviesList, isLoading } = useFetchAllMoviesQuery('');
  // const [fecthSortedMovies, { data: sortedMovies, isLoading: isSortedLoading }] =
  //   useLazyFetchSortedMoviesQuery();
  // const [
  //   fecthFilteredMovies,
  //   { data: filteredMovies, isLoading: isFilteredLoading },
  // ] = useLazyFetchFilteredMoviesByGenreQuery();

  // const moviesToRender = useMemo(() => {
  //   return filteredMovies?.length > 0 ? filteredMovies : moviesList;
  // }, [moviesList, filteredMovies]);
  // ================

  const realeseDateList = moviesList && getReleaseList(moviesList);

  return (
    <div className={classes.container}>
      <FilterPannel genres={genres} realeseDate={realeseDateList} />
      <div className={classes.movies_grid}>
        {moviesList &&
          moviesList?.map((movie: IMovie) => {
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
