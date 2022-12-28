import { configureStore } from '@reduxjs/toolkit';

// import moviesReducer from '../features/movies/moviesSlice';
import modalWindowReducer from '../features/modalWindow/modalWindowSlice';
import movieDetailsReducer from '../features/movieDetails/movieDetailsSlice';
import { moviesAPI } from './services/movies.api';

export const store = configureStore({
  reducer: {
    // movies: moviesReducer,
    modalWindow: modalWindowReducer,
    movieDetails: movieDetailsReducer,
    [moviesAPI.reducerPath]: moviesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
