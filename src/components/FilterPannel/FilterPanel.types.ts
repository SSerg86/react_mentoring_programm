export interface FilterPannelProps {
  genres: string[];
  realeseDate: string[];
  numFound: number;
  optionValue: string;
  onFilter: (value: string) => void;
}
