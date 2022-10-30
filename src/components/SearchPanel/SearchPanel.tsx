import React from 'react';
import classes from './SearchPanel.module.css';

export interface SearchPanelProps {
  placeholderText: string;
  searchButton: string;
}

const SearchPanel = ({
  searchButton,
  placeholderText,
}: SearchPanelProps): React.ReactElement => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className={classes.main} onSubmit={handleSubmit}>
      <input
        className={classes.searcInput}
        id='searchInput'
        type='text'
        placeholder={placeholderText}
      />
      <button className={classes.searchButton} type='submit'>
        {searchButton}
      </button>
    </form>
  );
};

export default SearchPanel;
