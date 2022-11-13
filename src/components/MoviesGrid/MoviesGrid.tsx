import React, { useMemo, useState } from 'react';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard, { MovieCardProps } from '../MovieCard/MovieCard';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

export interface MoviesGridProp {
  movies: MovieCardProps[];
  handleOpenMovieDetails?: (value: number) => void;
  handleDeleteMovieModal?: () => void;
  handleEditMovieModal?: () => void;
}

const MoviesGrid = (props: MoviesGridProp) => {
  const {
    movies,
    handleOpenMovieDetails,
    handleDeleteMovieModal,
    handleEditMovieModal,
  } = props;

  const [sortOption, setSortOption] = useState<string>('');

  const movieToRender = useMemo<MovieCardProps[]>(() => {
    return sortOption
      ? movies.filter((movie: MovieCardProps) =>
          movie.release_date.includes(sortOption)
        )
      : movies;
  }, [movies, sortOption]);

  const genreListToRender = getGenresList(movies);

  const realeseDateList = getReleaseList(movies);

  return (
    <div className={classes.container}>
      <FilterPannel
        genres={genreListToRender}
        realeseDate={realeseDateList}
        numFound={movies.length}
        onFilter={setSortOption}
      />
      <div className={classes.movies_grid}>
        {movieToRender &&
          movieToRender.map((movie: MovieCardProps) => {
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
