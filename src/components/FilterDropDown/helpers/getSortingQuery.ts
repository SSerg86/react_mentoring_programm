import { DropDownQueries, DropDownValues } from '../../../constants/filterDropdown';

export const getSortingQuery = (sortValue: string) => {
  switch (sortValue) {
    case DropDownValues[1]:
      return DropDownQueries.releaseDate;
    case DropDownValues[2]:
      return DropDownQueries.rating;
    case DropDownValues[3]:
      return DropDownQueries.budget;
    default:
      return DropDownQueries.default;
  }
};
