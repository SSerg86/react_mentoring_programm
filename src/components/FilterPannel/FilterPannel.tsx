import React from 'react';
import FilterDropDown from '../FilterDropDown/FilterDropDown';
import GenreOptionsList from '../GenreOptionsList/GenreOptionsList';
import classes from './FilterPannel.module.css';

interface FilterPannelProps {
  genres: string[];
  realeseDate: string[];
  numFound: number;
  onFilter: (value: string) => void;
}

const FilterPannel = ({
  genres,
  realeseDate,
  numFound,
  onFilter,
}: FilterPannelProps) => (
  <>
    <div className={classes.main}>
      {genres && (
        <GenreOptionsList>
          {genres.map((genre) => (
            <p key={genre} className={classes.item}>
              {genre}
              &#160;
            </p>
          ))}
        </GenreOptionsList>
      )}
      <p className={classes.sort_label}>Sort by</p>
      <FilterDropDown realeseDate={realeseDate} onFilter={onFilter} />
    </div>
    <p className={classes.num_found}>{`${numFound} movies found`}</p>
  </>
);

export default FilterPannel;
