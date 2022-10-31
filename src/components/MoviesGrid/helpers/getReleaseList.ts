import { MovieCardProps } from '../../MovieCard/MovieCard';

const getReleaseList = (movieList: MovieCardProps[]): string[] => {
  const releaselist = new Set();
  const uniqueListOfRelease: string[] = [];
  movieList
    .filter((movie) => movie.release_date !== '')
    .map((el) => new Date(el.release_date))
    .forEach((release_date) => releaselist.add(release_date.getFullYear()));

  releaselist.forEach((value: string) => uniqueListOfRelease.push(value));

  return uniqueListOfRelease;
};

export default getReleaseList;
