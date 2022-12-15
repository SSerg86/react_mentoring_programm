/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

/* eslint-disable @typescript-eslint/naming-convention */
interface modalWindowState {
  isModalActive: boolean;
  isAddForm: boolean;
  isEditForm: boolean;
  isDeleteMovieModal: boolean;
  toShowDetails: boolean;
  movieIdForDetails?: number;
}

const initialState: modalWindowState = {
  isModalActive: false,
  isAddForm: false,
  isEditForm: false,
  isDeleteMovieModal: false,
  toShowDetails: false,
  movieIdForDetails: null,
};

export const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    handleModalWindow: (state, action) => {
      state.isAddForm = action.payload;
      state.isEditForm = action.payload;
      state.isModalActive = action.payload;
      state.isDeleteMovieModal = action.payload;
    },
    handleAddMovieModal: (state) => {
      state.isModalActive = true;
      state.isAddForm = true;
    },
    handleEditMovieModal: (state) => {
      state.isModalActive = true;
      state.isEditForm = true;
    },
    handleDeleteMovieModal: (state) => {
      state.isModalActive = true;
      state.isDeleteMovieModal = true;
    },
    handleOpenMovieDetails: (state, action) => {
      state.toShowDetails = true;
      state.movieIdForDetails = action.payload;
    },
    handleCloseMovieDetails: (state) => {
      state.toShowDetails = false;
    },
  },
});

export const {
  handleModalWindow,
  handleAddMovieModal,
  handleEditMovieModal,
  handleDeleteMovieModal,
  handleOpenMovieDetails,
  handleCloseMovieDetails,
} = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
