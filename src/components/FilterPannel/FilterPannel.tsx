import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  fecthFilteredMovies,
  fecthSortedMovies,
  fetchMovies,
} from '../../features/movies/moviesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/contextHook';
import FilterDropDown from '../FilterDropDown/FilterDropDown';
import { getSortingQuery } from '../FilterDropDown/helpers/getSortingQuery';
import GenreOptionsList from '../GenreOptionsList/GenreOptionsList';
import { FilterPannelProps } from './FilterPanel.types';
import classes from './FilterPannel.module.css';

const FilterPannel = ({ genres, realeseDate }: FilterPannelProps) => {
  const { moviesList } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const [checked, setChecked] = useState(false);
  const [checkedState, setCheckedState] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>('Sort Here');

  const numFound = useMemo(() => {
    return moviesList?.length;
  }, [moviesList?.length]);

  useEffect(() => {
    setCheckedState(new Array(genres.length).fill(false));
  }, [genres.length]);

  const handleOnGhange = useCallback(
    (position: number, value: string) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
      let query = [...selectedGenres];

      setCheckedState(updatedCheckedState);

      if (updatedCheckedState[position]) {
        query.push(value);
        setSelectedGenres(selectedGenres.concat(value));
      }

      if (!updatedCheckedState[position] && selectedGenres.includes(value)) {
        setSelectedGenres(selectedGenres.filter((el) => el !== value));
        query = [...selectedGenres.filter((el) => el !== value)];
      }

      return query.length > 0
        ? dispatch(fecthFilteredMovies(query))
        : dispatch(fetchMovies());
    },
    [checkedState, dispatch, selectedGenres]
  );

  const handleSorting = useCallback(
    (val: string) => {
      const sortingQuery = getSortingQuery(val);
      setSortOption(val);

      if (sortingQuery) {
        dispatch(fecthSortedMovies(sortingQuery));
      } else {
        dispatch(fetchMovies());
      }
    },
    [dispatch]
  );

  return (
    <>
      <div className={classes.main}>
        <ul className={classes.genres_list}>
          {genres && (
            <GenreOptionsList>
              {genres.sort().map((genre, index) => (
                <li className={classes.genre__radio_btn} key={genre}>
                  <input
                    type='checkbox'
                    value={genre}
                    id={genre}
                    onChange={(e) => handleOnGhange(index, e.target.value)}
                    onClick={() => setChecked(!checked)}
                    defaultChecked={checkedState[index]}
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
          onFilter={handleSorting}
          optionValue={sortOption}
        />
      </div>
      <p className={classes.num_found}>{`${numFound} movies found`}</p>
    </>
  );
};

export default FilterPannel;
