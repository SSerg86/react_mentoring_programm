import React, { useState, useEffect, useCallback } from 'react';
import { DropDownValues } from '../../constants/filterDropdown';
import {
  fecthFilteredMovies,
  fecthSortedMovies,
  fetchMovies,
} from '../../features/movies/moviesSlice';
import { useAppSelector, useAppDispatch } from '../../hooks/contextHook';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import { getSortingQuery } from '../FilterDropDown/helpers/getSortingQuery';
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

  const [sortOption, setSortOption] = useState<string>(DropDownValues[0]);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMovies());
    }
  }, [dispatch, status]);

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

  const handleSorting = useCallback(
    (val: string) => {
      const sortingQuery = getSortingQuery(val);
      setSortOption(val);
      if (sortingQuery) {
        dispatch(fecthSortedMovies(sortingQuery));
      } else {
        dispatch(fetchMovies());
      }
    },
    [dispatch]
  );

  const [genres, setGenres] = useState<string[]>([]);

  const handleFilterByGenre = useCallback(
    (genre: string) => {
      if (genres.includes(genre)) {
        setGenres(genres.filter((val) => val !== genre));
      } else {
        setGenres(genres.concat(genre));
      }

      return genres.length > 0
        ? dispatch(fecthFilteredMovies(genres))
        : fetchMovies();
    },
    [dispatch, genres]
  );

  const genreListToRender = moviesList && getGenresList(moviesList);
  const realeseDateList = moviesList && getReleaseList(moviesList);

  return (
    <div className={classes.container}>
      <FilterPannel
        genres={genreListToRender}
        realeseDate={realeseDateList}
        numFound={moviesList?.length}
        onSort={handleSorting}
        onFilter={handleFilterByGenre}
        optionValue={sortOption}
      />
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
