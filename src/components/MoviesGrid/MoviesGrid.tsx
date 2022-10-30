/* eslint-disable operator-linebreak */
import React, { useEffect, useState } from 'react';
import FilterPannel from '../FilterPannel/FilterPannel';
import MovieCard, { MovieCardProps } from '../MovieCard/MovieCard';
import classes from './MoviesGrid.module.css';

export interface MoviesGridProp {
  movies: MovieCardProps[];
}

const MoviesGrid = (props: MoviesGridProp): React.ReactElement => {
  const { movies } = props ?? {};
  const [genres, setGenres] = useState([]);
  const [realeseDate, setRealeseDate] = useState([]);

  const getGenresList = (movieList: MovieCardProps[]): string[] => {
    const setOfGenres = new Set();
    const uniqueGenres: string[] = [];
    movieList
      .filter((movie) => movie.genres.length > 0)
      .map((el) => el.genres)
      .forEach((genre) => genre.forEach((el) => setOfGenres.add(el)));

    setOfGenres.forEach((value: string) => uniqueGenres.push(value));

    return uniqueGenres;
  };

  const getreleaseList = (movieList: MovieCardProps[]): string[] => {
    const setOfRelease = new Set();
    const uniqueRelease: string[] = [];
    movieList
      .filter((movie) => movie.release_date !== '')
      .map((el) => new Date(el.release_date))
      .forEach((release_date) => setOfRelease.add(release_date.getFullYear()));

    setOfRelease.forEach((value: string) => uniqueRelease.push(value));

    return uniqueRelease;
  };

  useEffect(() => {
    setGenres(getGenresList(movies));
    setRealeseDate(getreleaseList(movies));
  }, [movies]);

  return (
    <div className={classes.container}>
      <FilterPannel
        genres={genres}
        realeseDate={realeseDate}
        numFound={movies.length}
      />
      <div className={classes.movies_grid}>
        {movies &&
          movies.map((movie: MovieCardProps) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
      </div>
    </div>
  );
};

export default MoviesGrid;
