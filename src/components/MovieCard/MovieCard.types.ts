export interface IMovie {
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
