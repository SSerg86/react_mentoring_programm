import React, { useMemo, useState } from 'react';
import { useMoviesContext } from '../../hooks/MoviesContext';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard, { MovieCardProps } from '../MovieCard/MovieCard';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

export interface MoviesGridProp {
  handleOpenMovieDetails?: (value: number) => void;
  handleDeleteMovieModal?: () => void;
  handleEditMovieModal?: () => void;
}

const MoviesGrid = () => {
  const {
    handleOpenMovieDetails,
    handleDeleteMovieModal,
    handleEditMovieModal,
    moviesList,
  } = useMoviesContext();

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
              handleOpenMovieDetails,
              handleEditMovieModal,
            };
            return (
              <ErrorBoundary
                key={movie.id}
                handleDeleteMovieModal={handleDeleteMovieModal}
              >
                <MovieCard key={movie.id} {...movicardProps} />
              </ErrorBoundary>
            );
          })}
      </div>
    </div>
  );
};

export default MoviesGrid;
