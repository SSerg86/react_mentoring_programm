import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMovie } from '../../components/MovieCard/MovieCard.types';
import { baseURL } from '../../constants/path';

interface ServerResponse<T> {
  totalAmount: number;
  data: T[];
  offset: number;
  limit: number;
}

export const moviesAPI = createApi({
  reducerPath: 'moviesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<IMovie[], string>({
      query: () => ({
        url: '/movies',
      }),
      transformResponse: (response: ServerResponse<IMovie>) => response.data,
    }),
    fetchSortedMovies: build.query<IMovie[], string>({
      query: (sortValue: string) => ({
        url: `/movies?sortBy=${sortValue}&sortOrder=desc`,
      }),
      transformResponse: (response: ServerResponse<IMovie>) => response.data,
    }),
    fetchFilteredMoviesByGenre: build.query<IMovie[], string[]>({
      query: (genreList: string[]) => ({
        url: `/movies?filter=${genreList.toString()}`,
      }),
      transformResponse: (response: ServerResponse<IMovie>) => response.data,
    }),
  }),
});

export const {
  useFetchAllMoviesQuery,
  useLazyFetchSortedMoviesQuery,
  useLazyFetchFilteredMoviesByGenreQuery,
} = moviesAPI;
