import React from 'react';

interface FilterDropDownProps {
  realeseDate: string[];
  onFilter: (value: string) => void;
}

const FilterDropDown = ({ realeseDate, onFilter }: FilterDropDownProps) => (
  <form>
    <select
      value='REALEASE DATE'
      id='releases'
      name='releases'
      onChange={(value) => onFilter(value.target.value)}
    >
      <option value='REALEASE DATE'>REALEASE DATE</option>
      {realeseDate.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  </form>
);

export default FilterDropDown;
