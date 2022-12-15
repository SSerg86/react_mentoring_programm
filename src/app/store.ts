import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from '../features/movies/moviesSlice';
import modalWindowReducer from '../features/modalWindow/modalWindowSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    modalWindow: modalWindowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
