/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface movie {
  id?: number;
  title?: string;
  tagline?: string;
  vote_average?: number;
  vote_count?: number;
  poster_path?: string;
  release_date?: string;
  overview?: string;
  budget?: number;
  revenue?: number;
  genres?: string[];
  runtime?: number;
}

interface moviesState {
  moviesList: movie[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: moviesState = {
  moviesList: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await fetch('http://localhost:4000/movies').then((res) => {
    return res.json();
  });

  return response.data;
});

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.moviesList = state.moviesList.concat(action.payload);
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
