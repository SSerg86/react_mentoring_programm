import React from 'react';
import { FilterDropDownProps } from './FilterDropDawn.types';

const FilterDropDown = ({
  realeseDate,
  onFilter,
  optionValue,
}: FilterDropDownProps) => {
  return (
    <form>
      <select
        value='REALEASE DATE'
        id='releases'
        name='releases'
        onChange={(value) => onFilter(value.target.value)}
      >
        <option value='REALEASE DATE'>{optionValue}</option>
        {realeseDate
          .filter((date) => date !== optionValue)
          .sort()
          .map((date) => (
            <option key={date} value={date}>
              {date}
            </option>
          ))}
      </select>
    </form>
  );
};

export default FilterDropDown;
