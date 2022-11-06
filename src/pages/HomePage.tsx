import React, { useState } from 'react';
import DeleteMovieModal from '../components/DeleteMovieModal/DeleteMovieModal';
// import DeleteMovieModal from '../components/DeleteMovieModal/DeleteMovieModal';
import Footer from '../components/Footer/Footer';
import FormWrapper from '../components/FormWrapper/FormWrapper';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ModalWindow from '../components/ModalWindow/ModalWindow';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import heroBannerProps from '../mocks/heroBanner';
import movies from '../mocks/movies';

const HomePage = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isAddForm, setIsAddForm] = useState<boolean>(false);
  const [isEditForm, setIsEditForm] = useState<boolean>(false);
  const [isDeleteMovieModal, setIsDeleteMovieModal] = useState<boolean>(false);

  const handleModalWindow = (value: boolean) => {
    setIsModalActive(value);
    setIsAddForm(value);
    setIsEditForm(value);
    setIsDeleteMovieModal(value);
  };

  const handleAddMovieModal = () => {
    setIsModalActive(true);
    setIsAddForm(true);
  };

  const handleEditMovieModal = () => {
    setIsModalActive(true);
    setIsEditForm(true);
  };

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
    handleEditMovieModal,
    handleDeleteMovieModal,
  };

  return (
    <>
      <HeroBanner {...heroBannerPropsExtended} />
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
    </>
  );
};

export default HomePage;
