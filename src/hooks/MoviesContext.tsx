import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { MovieCardProps } from '../components/MovieCard/MovieCard';
import movies from '../mocks/movies';

interface MoviesContextData extends MovieCardProps {
  moviesList: MovieCardProps[];
  handleOpenMovieDetails?: (value: number) => void;
  handleDeleteMovieModal?: () => void;
  handleEditMovieModal?: () => void;
  handleAddMovieModal?: () => void;
  setToShowDetails?: () => void;
  handleCloseMovieDetails?: () => void;
  handleModalWindow?: (value: boolean) => void;
  movieIdForDetails?: number;
  isModalActive?: boolean;
  toShowDetails?: boolean;
  isEditForm?: boolean;
  isAddForm?: boolean;
  isDeleteMovieModal?: boolean;
}
interface MoviesProviderProps {
  children?: React.ReactNode;
}

export const MoviesContext = React.createContext<MoviesContextData>(undefined);

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
  const [moviesList, setMoviesList] = useState(movies);
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [isAddForm, setIsAddForm] = useState<boolean>(false);
  const [isEditForm, setIsEditForm] = useState<boolean>(false);
  const [toShowDetails, setToShowDetails] = useState<boolean>(false);
  const [movieIdForDetails, setMovieIdForDetails] = useState<number>(null);
  const [isDeleteMovieModal, setIsDeleteMovieModal] = useState<boolean>(false);

  const handleModalWindow = (value: boolean) => {
    setIsModalActive(value);
    setIsAddForm(value);
    setIsEditForm(value);
    setIsDeleteMovieModal(value);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleOpenMovieDetails = useCallback((id: number) => {
    setMovieIdForDetails(id);
    setToShowDetails(true);
    scrollToTop();
  }, []);

  const handleCloseMovieDetails = useCallback(() => setToShowDetails(false), []);

  const handleAddMovieModal = useCallback(() => {
    setIsModalActive(true);
    setIsAddForm(true);
  }, []);

  const handleEditMovieModal = useCallback(() => {
    setIsModalActive(true);
    setIsEditForm(true);
  }, []);

  const handleDeleteMovieModal = useCallback(() => {
    setIsModalActive(true);
    setIsDeleteMovieModal(true);
  }, []);

  useEffect(() => {
    setToShowDetails(false);
    setMoviesList(movies);
  }, []);

  const moviesContext = useMemo(
    () => ({
      moviesList,
      isModalActive,
      isAddForm,
      isEditForm,
      toShowDetails,
      movieIdForDetails,
      isDeleteMovieModal,
      handleModalWindow,
      handleOpenMovieDetails,
      handleCloseMovieDetails,
      handleAddMovieModal,
      handleEditMovieModal,
      handleDeleteMovieModal,
    }),
    [
      handleAddMovieModal,
      handleCloseMovieDetails,
      handleDeleteMovieModal,
      handleEditMovieModal,
      handleOpenMovieDetails,
      isAddForm,
      isDeleteMovieModal,
      isEditForm,
      isModalActive,
      movieIdForDetails,
      moviesList,
      toShowDetails,
    ]
  );

  return (
    <MoviesContext.Provider value={moviesContext}>{children}</MoviesContext.Provider>
  );
};

export const useMoviesContext = (): MoviesContextData => {
  return useContext(MoviesContext);
};
