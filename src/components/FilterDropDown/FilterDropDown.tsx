import React from 'react';

interface FilterDropDownProps {
  realeseDate: string[];
}

const FilterDropDown = ({
  realeseDate,
}: FilterDropDownProps): React.ReactElement => (
  <form>
    <select value='REALEASE DATE' id='releases' name='releases'>
      <option value='REALEASE DATE' selected>
        REALEASE DATE
      </option>
      {realeseDate.map((date) => (
        <option key={date} value={date}>
          {date}
        </option>
      ))}
    </select>
  </form>
);

export default FilterDropDown;
