import React, { useCallback, useState } from 'react';
import { DropDownValues } from '../../constants/filterDropdown';
import { FilterDropDownProps } from './FilterDropDawn.types';

const FilterDropDown = ({ onFilter, optionValue }: FilterDropDownProps) => {
  const handleOnChange = useCallback(
    (val: string) => {
      onFilter(val);
    },
    [onFilter]
  );
  return (
    <form>
      <select
        value='REALEASE DATE'
        id='releases'
        name='releases'
        onChange={(value) => handleOnChange(value.target.value)}
      >
        <option value='REALEASE DATE'>{optionValue}</option>
        {DropDownValues.map((val) => (
          <option key={val} value={val}>
            {val}
          </option>
        ))}
      </select>
    </form>
  );
};

export default FilterDropDown;
