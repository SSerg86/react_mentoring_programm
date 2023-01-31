/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/naming-convention */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IMovie } from '../../components/MovieCard/MovieCard.types';
import { baseURL } from '../../constants/path';

interface movieDetails {
  movieInfo: IMovie;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: movieDetails = {
  movieInfo: null,
  status: 'idle',
  error: null,
};

export const fetchMovieDetailsById = createAsyncThunk(
  'movieDetails/fetchMovieDetailsById',
  async (movieId: number) => {
    const response = await fetch(`${baseURL}/movies/${movieId}`);
    const data = await response.json();

    return data;
  }
);

export const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMovieDetailsById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetailsById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieInfo = action.payload;
      })
      .addCase(fetchMovieDetailsById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default movieDetailsSlice.reducer;
