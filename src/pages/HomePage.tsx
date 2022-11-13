import React, { useMemo } from 'react';
import DeleteMovieModal from '../components/DeleteMovieModal/DeleteMovieModal';
import Footer from '../components/Footer/Footer';
import FormWrapper from '../components/FormWrapper/FormWrapper';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import heroBannerProps from '../mocks/heroBanner';
import classes from './HomePage.module.css';

import MovieDetails from '../components/MovieDetails/MovieDetails';
import { useMoviesContext } from '../hooks/MoviesContext';

const HomePage = () => {
  const { toShowDetails, isAddForm, isDeleteMovieModal, isEditForm } =
    useMoviesContext();

  const heroBannerPropsExtended = {
    ...heroBannerProps,
  };

  const movieDetailsProps = {
    logo: heroBannerProps.imageUrl,
  };

  return (
    <div className={classes.root}>
      {toShowDetails ? (
        <MovieDetails {...movieDetailsProps} />
      ) : (
        <HeroBanner {...heroBannerPropsExtended} />
      )}
      <MoviesGrid />
      <Footer imageUrl={heroBannerProps.imageUrl} />
      <ModalWindow>
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
