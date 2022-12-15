import React from 'react';
import IconButton from '../IconButton/IconButton';
import SingleMovieGenreList from '../SingleMovieGenreList/SingleMovieGenreList';
import contextMenu from '../../assets/images/context_menu.png';
import classes from './MovieCard.module.css';
import { useAppDispatch } from '../../hooks/contextHook';
import {
  handleEditMovieModal,
  handleOpenMovieDetails,
} from '../../features/modalWindow/modalWindowSlice';

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
}

const MovieCard = ({
  title,
  poster_path,
  release_date,
  genres,
  id,
}: MovieCardProps) => {
  const date = new Date(release_date);
  if (!poster_path) {
    throw new Error('I crashed!');
  }

  const dispatch = useAppDispatch();

  const handleContextButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch(handleEditMovieModal());
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleClick = () => {
    dispatch(handleOpenMovieDetails(id));
    scrollToTop();
  };

  return (
    <div className={classes.main} onClick={() => handleClick()} aria-hidden>
      <img
        className={classes.image}
        alt={title}
        src={poster_path || NOT_FOUND_IMG}
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
