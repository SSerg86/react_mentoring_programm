import React from 'react';
import SingleMovieGenreList from '../SingleMovieGenreList/SingleMovieGenreList';
import classes from './MovieCard.module.css';

const NOT_FOUND_IMG =
  'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

export interface MovieCardProps {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: number;
}

const MovieCard = ({ title, poster_path, release_date, genres }: MovieCardProps) => {
  const date = new Date(release_date);
  if (!poster_path) {
    throw new Error('I crashed!');
  }

  return (
    <div className={classes.main}>
      <img
        className={classes.image}
        src={poster_path || NOT_FOUND_IMG}
        alt={title}
      />
      <div className={classes.info}>
        <h4 className={classes.movie_title}>{title}</h4>
        <div className={classes.release_date}>
          <span>{date.getFullYear()}</span>
        </div>
      </div>
      {genres && (
        <SingleMovieGenreList>
          {genres.map((genre) => (
            <p key={genre}>
              {genre}
              &#160;
            </p>
          ))}
        </SingleMovieGenreList>
      )}
    </div>
  );
};

export default MovieCard;
