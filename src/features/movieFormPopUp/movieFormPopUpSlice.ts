/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

interface IMovieFormState {
  isModalActive: boolean;
  isAddForm: boolean;
  isEditForm: boolean;
  isDeleteMovieModal: boolean;
  toShowDetails: boolean;
}

const initialState: IMovieFormState = {
  isModalActive: false,
  isAddForm: false,
  isEditForm: false,
  isDeleteMovieModal: false,
  toShowDetails: false,
};

export const modalWindowSlice = createSlice({
  name: 'movieFormPopUp',
  initialState,
  reducers: {
    handleMovieForm: (state, action) => {
      state.isAddForm = action.payload;
      state.isEditForm = action.payload;
      state.isModalActive = action.payload;
      state.isDeleteMovieModal = action.payload;
    },
    handleAddMovieForm: (state) => {
      state.isModalActive = true;
      state.isAddForm = true;
    },
    handleEditMovieForm: (state) => {
      state.isModalActive = true;
      state.isEditForm = true;
    },
    handleDeleteMovieForm: (state) => {
      state.isModalActive = true;
      state.isDeleteMovieModal = true;
    },
    handleOpenMovieDetails: (state) => {
      state.toShowDetails = true;
    },
    handleCloseMovieDetails: (state) => {
      state.toShowDetails = false;
    },
  },
});

export const {
  handleMovieForm,
  handleAddMovieForm,
  handleEditMovieForm,
  handleDeleteMovieForm,
  handleOpenMovieDetails,
  handleCloseMovieDetails,
} = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
