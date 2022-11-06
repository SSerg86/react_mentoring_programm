import React, { useEffect, useState } from 'react';
import ErrorBoundary from '../ErrorBoundery/ErrorBoundery';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard, { MovieCardProps } from '../MovieCard/MovieCard';
import getGenresList from './helpers/getGenreList';
import getReleaseList from './helpers/getReleaseList';
import classes from './MoviesGrid.module.css';

export interface MoviesGridProp {
  movies: MovieCardProps[];
  handleEditMovieModal?: () => void;
  handleDeleteMovieModal?: () => void;
}

const MoviesGrid = (props: MoviesGridProp) => {
  const { movies, handleEditMovieModal, handleDeleteMovieModal } = props;

  const [movieList, setMovieList] = useState<MovieCardProps[]>(movies);

  useEffect(() => {
    setMovieList(movies);
  }, []);

  const filteredMovie = (option: string) => {
    const moviesToFilter = movies;
    setMovieList(
      moviesToFilter.filter((movie: MovieCardProps) =>
        movie.release_date.includes(option)
      )
    );
  };

  const genreListToRender = getGenresList(movies);
  const realeseDateList = getReleaseList(movies);

  return (
    <div className={classes.container}>
      <FilterPannel
        genres={genreListToRender}
        realeseDate={realeseDateList}
        numFound={movies.length}
        onFilter={filteredMovie}
      />
      <div className={classes.movies_grid}>
        {movieList &&
          movieList.map((movie: MovieCardProps) => {
            const movicardProps = {
              ...movie,
              handleEditMovieModal,
            };
            return (
              <ErrorBoundary handleDeleteMovieModal={handleDeleteMovieModal}>
                <MovieCard key={movie.id} {...movicardProps} />
              </ErrorBoundary>
            );
          })}
      </div>
    </div>
  );
};

export default MoviesGrid;
