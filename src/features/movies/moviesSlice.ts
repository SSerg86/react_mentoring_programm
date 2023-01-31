/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../../components/MovieCard/MovieCard.types';
import { baseURL } from '../../constants/path';

interface moviesState {
  moviesList: IMovie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  isInitialRequest: boolean;
}

const initialState: moviesState = {
  moviesList: [],
  status: 'idle',
  isInitialRequest: true,
  error: null,
};

export const requestMovies = createAsyncThunk('movies/requestMovies', async () => {
  const response = await fetch(`${baseURL}/movies`);
  const payload = await response.json();

  return payload.data;
});

export const requestSortedMovies = createAsyncThunk(
  'movies/requestSortedMovies',
  async (query: string) => {
    const response = await fetch(`${baseURL}/movies?sortBy=${query}&sortOrder=desc`);
    const payload = await response.json();

    return payload.data;
  }
);

export const requestFilteredMovies = createAsyncThunk(
  'movies/requestFilteredMovies',
  async (query: string[]) => {
    const response = await fetch(`${baseURL}/movies?filter=${query.toString()}`);
    const payload = await response.json();

    return payload.data;
  }
);

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(requestMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesList = action.payload;
      })
      .addCase(requestMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    builder
      .addCase(requestSortedMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesList = action.payload;
        state.isInitialRequest = false;
      })
      .addCase(requestSortedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    builder
      .addCase(requestFilteredMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesList = action.payload;
        state.isInitialRequest = false;
      })
      .addCase(requestFilteredMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
