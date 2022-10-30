import React from 'react';
import FilterDropDown from '../FilterDropDown/FilterDropDown';
import GenreOptionsList from '../GenreOptionsList/GenreOptionsList';
import classes from './FilterPannel.module.css';

interface FilterPannelProps {
  genres: string[];
  realeseDate: string[];
  numFound: number;
}

const FilterPannel = ({
  genres,
  realeseDate,
  numFound,
}: FilterPannelProps): React.ReactElement => (
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
      <FilterDropDown realeseDate={realeseDate} />
    </div>
    <p className={classes.num_found}>{`${numFound} movies found`}</p>
  </>
);

export default FilterPannel;
