import React, { useState } from 'react';
import FilterDropDown from '../FilterDropDown/FilterDropDown';
import GenreOptionsList from '../GenreOptionsList/GenreOptionsList';
import { FilterPannelProps } from './FilterPanel.types';
import classes from './FilterPannel.module.css';

const FilterPannel = ({
  genres,
  realeseDate,
  numFound,
  onSort,
  onFilter,
  optionValue,
}: FilterPannelProps) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className={classes.main}>
        <ul className={classes.genres_list}>
          {genres && (
            <GenreOptionsList>
              {genres.sort().map((genre) => (
                <li className={classes.genre__radio_btn} key={genre}>
                  <input
                    type='checkbox'
                    value={genre}
                    id={genre}
                    onChange={(e) => onFilter(e.target.value)}
                    onClick={() => setChecked(!checked)}
                    defaultChecked={checked}
                  />
                  <label key={genre} htmlFor={genre}>
                    {genre}
                  </label>
                </li>
              ))}
            </GenreOptionsList>
          )}
        </ul>
        <p className={classes.sort_label}>Sort by</p>
        <FilterDropDown
          realeseDate={realeseDate}
          onFilter={onSort}
          optionValue={optionValue}
        />
      </div>
      <p className={classes.num_found}>{`${numFound} movies found`}</p>
    </>
  );
};

export default FilterPannel;
