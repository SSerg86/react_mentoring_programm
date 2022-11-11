import { MovieCardProps } from '../MovieCard/MovieCard';

export interface MovieDetailsProps extends MovieCardProps {
  logo?: string;
  genre: string;
  handleClick?: () => void;
}
