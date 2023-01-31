import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from '../features/movies/moviesSlice';
import modalWindowReducer from '../features/movieFormPopUp/movieFormPopUpSlice';
import movieDetailsReducer from '../features/movieDetails/movieDetailsSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    modalWindow: modalWindowReducer,
    movieDetails: movieDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
