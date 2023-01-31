import React from 'react';
import heroBannerProps from '../../mocks/heroBanner';
import Button from '../Button/Button';
import classes from './SearchPanel.module.css';

const SearchPanel = () => {
  const { searchPanel } = heroBannerProps;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className={classes.main} onSubmit={handleSubmit}>
      <input
        className={classes.searchInput}
        id='searchInput'
        type='text'
        placeholder={searchPanel.placeholderText}
      />
      <Button inputValue={searchPanel.searchButton} inputType='submit' />
    </form>
  );
};

export default SearchPanel;
