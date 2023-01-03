export interface FilterPannelProps {
  genres: string[];
  realeseDate: string[];
  numFound: number;
  optionValue: string;
  onSort: (value: string) => void;
  onFilter: (value: string) => void;
}
