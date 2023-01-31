import React from 'react';
import DeleteMovieModal from '../components/DeleteMovieModal/DeleteMovieModal';
import Footer from '../components/Footer/Footer';
import FormWrapper from '../components/FormWrapper/FormWrapper';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import classes from './HomePage.module.css';

import MovieDetails from '../components/MovieDetails/MovieDetails';
import { useAppSelector } from '../hooks/contextHook';

const HomePage = () => {
  const { isAddForm, isEditForm, isDeleteMovieModal, toShowDetails } =
    useAppSelector((state) => state.modalWindow);

  return (
    <div className={classes.root}>
      {toShowDetails ? <MovieDetails /> : <HeroBanner />}
      <MoviesGrid />
      <Footer />
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
