/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../../components/MovieCard/MovieCard.types';
import { baseURL } from '../../constants/path';

interface moviesState {
  moviesList: IMovie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: moviesState = {
  moviesList: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch(`${baseURL}/movies`);
  const payload = await response.json();

  return payload.data;
});

export const fecthSortedMovies = createAsyncThunk(
  'movies/fetchSortedMovies',
  async (query: string) => {
    const response = await fetch(`${baseURL}/movies?sortBy=${query}&sortOrder=desc`);
    const payload = await response.json();

    return payload.data;
  }
);

export const fecthFilteredMovies = createAsyncThunk(
  'movies/fecthFilteredMovies',
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
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesList = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    builder
      .addCase(fecthSortedMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesList = action.payload;
      })
      .addCase(fecthSortedMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    builder
      .addCase(fecthFilteredMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesList = action.payload;
      })
      .addCase(fecthFilteredMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
