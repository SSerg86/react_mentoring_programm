import { IMovie } from '../../MovieCard/MovieCard.types';

const getReleaseList = (movieList: IMovie[]): string[] => {
  const releaselist = new Set<string>();
  const uniqueListOfRelease: string[] = [];
  movieList
    .filter((movie) => movie.release_date !== '')
    .map((el) => new Date(el.release_date))
    .forEach((release_date) =>
      releaselist.add(release_date.getFullYear().toString())
    );

  releaselist.forEach((value: string) => uniqueListOfRelease.push(value));

  return uniqueListOfRelease;
};

export default getReleaseList;
