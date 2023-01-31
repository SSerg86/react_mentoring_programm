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
    closeForm: (state, action) => {
      state.isAddForm = action.payload;
      state.isEditForm = action.payload;
      state.isModalActive = action.payload;
      state.isDeleteMovieModal = action.payload;
    },
    openAddMovieForm: (state) => {
      state.isModalActive = true;
      state.isAddForm = true;
    },
    openEditMovieForm: (state) => {
      state.isModalActive = true;
      state.isEditForm = true;
    },
    openDeleteMovieForm: (state) => {
      state.isModalActive = true;
      state.isDeleteMovieModal = true;
    },
    openMovieDetails: (state) => {
      state.toShowDetails = true;
    },
    closeMovieDetails: (state) => {
      state.toShowDetails = false;
    },
  },
});

export const {
  closeForm,
  openAddMovieForm,
  openEditMovieForm,
  openDeleteMovieForm,
  openMovieDetails,
  closeMovieDetails,
} = modalWindowSlice.actions;

export default modalWindowSlice.reducer;
