import React from 'react';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard, { MovieCardProps } from '../MovieCard/MovieCard';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

export interface MoviesGridProp {
  movies: MovieCardProps[];
}

const MoviesGrid = (props: MoviesGridProp) => {
  const { movies } = props;

  const genreListToRender = getGenresList(movies);
  const realeseDateList = getReleaseList(movies);

  return (
    <div className={classes.container}>
      <FilterPannel
        genres={genreListToRender}
        realeseDate={realeseDateList}
        numFound={movies.length}
      />
      <div className={classes.movies_grid}>
        {movies &&
          movies.map((movie: MovieCardProps) => (
            <ErrorBoundary>
              <MovieCard key={movie.id} {...movie} />
            </ErrorBoundary>
          ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
