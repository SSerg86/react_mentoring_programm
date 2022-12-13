import React from 'react';
import IconButton from '../IconButton/IconButton';
import SingleMovieGenreList from '../SingleMovieGenreList/SingleMovieGenreList';
import contextMenu from '../../assets/images/context_menu.png';
import classes from './MovieCard.module.css';

const NOT_FOUND_IMG =
  'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg';

export interface MovieCardProps {
  id?: number;
  poster_path?: string;
  title?: string;
  vote_average?: number;
  vote_count?: number;
  release_date?: string;
  overview?: string;
  budget?: number;
  revenue?: number;
  genres?: string[];
  runtime?: number;
  handleOpenMovieDetails?: (value: number) => void;
  handleEditMovieModal?: () => void;
}

const MovieCard = ({
  title,
  poster_path,
  release_date,
  genres,
  id,
  handleOpenMovieDetails,
  handleEditMovieModal,
}: MovieCardProps) => {
  const date = new Date(release_date);
  if (!poster_path) {
    throw new Error('I crashed!');
  }

  const handleContextButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleEditMovieModal();
  };

  return (
    <div
      className={classes.main}
      onClick={() => handleOpenMovieDetails(id)}
      aria-hidden
    >
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
      <div className={classes.contextIcon}>
        <IconButton
          icon={contextMenu}
          handleClick={(e: React.MouseEvent) => handleContextButton(e)}
          isRound
        />
      </div>
    </div>
  );
};

export default MovieCard;
