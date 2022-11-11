import React, { useCallback, useEffect, useState } from 'react';
import DeleteMovieModal from '../components/DeleteMovieModal/DeleteMovieModal';
import Footer from '../components/Footer/Footer';
import FormWrapper from '../components/FormWrapper/FormWrapper';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import heroBannerProps from '../mocks/heroBanner';
import classes from './HomePage.module.css';

import movies from '../mocks/movies';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const HomePage = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isAddForm, setIsAddForm] = useState<boolean>(false);
  const [isEditForm, setIsEditForm] = useState<boolean>(false);
  const [toShowDetails, setToShowDetails] = useState<boolean>(false);
  const [isDeleteMovieModal, setIsDeleteMovieModal] = useState<boolean>(false);

  const handleModalWindow = (value: boolean) => {
    setIsModalActive(value);
    setIsAddForm(value);
    setIsEditForm(value);
    setIsDeleteMovieModal(value);
  };

  const scrollToTop = () => {
    // eslint-disable-next-line no-restricted-globals
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenMovieDetails = useCallback(() => {
    setToShowDetails(true);
    scrollToTop();
  }, []);

  const handleCloseMovieDetails = useCallback(() => {
    setToShowDetails(false);
  }, []);

  const handleAddMovieModal = () => {
    setIsModalActive(true);
    setIsAddForm(true);
  };

  // const handleEditMovieModal = () => {
  //   setIsModalActive(true);
  //   setIsEditForm(true);
  // };

  const handleDeleteMovieModal = () => {
    setIsModalActive(true);
    setIsDeleteMovieModal(true);
  };

  const heroBannerPropsExtended = {
    ...heroBannerProps,
    handleAddMovieModal,
  };

  const moviesGridProps = {
    movies,
    handleOpenMovieDetails,
    handleDeleteMovieModal,
  };

  const movieDetailsProps = {
    logo: heroBannerProps.imageUrl,
    poster_path: movies[1].poster_path,
    title: movies[1].title,
    vote_average: movies[1].vote_average,
    genre: movies[1].genres[1],
    runtime: movies[1].runtime,
    release_date: movies[1].release_date,
    overview: movies[1].overview,
    handleClick: handleCloseMovieDetails,
  };

  return (
    <div className={classes.root}>
      {toShowDetails ? (
        <MovieDetails {...movieDetailsProps} />
      ) : (
        <HeroBanner {...heroBannerPropsExtended} />
      )}
      <MoviesGrid {...moviesGridProps} />
      <Footer imageUrl={heroBannerProps.imageUrl} />
      <ModalWindow setActive={handleModalWindow} active={isModalActive}>
        {isAddForm && <FormWrapper modal_title='Add Movie' />}
        {isEditForm && <FormWrapper modal_title='Edit Movie' />}
        {isDeleteMovieModal && (
          <DeleteMovieModal
            title='Delete Movie'
            description='Are you sure you want to delete this movie?'
          />
        )}
      </ModalWindow>
    </div>
  );
};

export default HomePage;
