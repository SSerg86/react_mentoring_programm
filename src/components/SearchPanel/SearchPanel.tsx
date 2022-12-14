import React from 'react';
import Button from '../Button/Button';
import classes from './SearchPanel.module.css';

export interface SearchPanelProps {
  placeholderText: string;
  searchButton: string;
}

const SearchPanel = ({ searchButton, placeholderText }: SearchPanelProps) => {
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
      <Button inputValue={searchButton} inputType='submit' />
    </form>
  );
};

export default SearchPanel;
