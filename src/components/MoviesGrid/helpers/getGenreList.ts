import { MovieCardProps } from '../../MovieCard/MovieCard';

const getGenresList = (movieList: MovieCardProps[]): string[] => {
  const genreList = new Set();
  const uniqueListOfGenres: string[] = [];
  movieList
    .filter((movie) => movie.genres.length > 0)
    .map((el) => el.genres)
    .forEach((genre) => genre.forEach((el) => genreList.add(el)));

  genreList.forEach((value: string) => uniqueListOfGenres.push(value));

  return uniqueListOfGenres;
};

export default getGenresList;
