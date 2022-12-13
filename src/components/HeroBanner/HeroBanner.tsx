import React from 'react';
import { useMoviesContext } from '../../hooks/MoviesContext';
import LogoPanel from '../LogoPanel/LogoPanel';
import SearchPanel, { SearchPanelProps } from '../SearchPanel/SearchPanel';

import classes from './HeroBanner.module.css';

export interface HeroBannerProps {
  buttonName: string;
  imageUrl: string;
  title?: string;
  searchPanel?: SearchPanelProps;
}

const HeroBanner = ({
  imageUrl,
  buttonName,
  searchPanel,
  title,
}: HeroBannerProps) => {
  const { handleAddMovieModal } = useMoviesContext();

  return (
    <div className={classes.main}>
      <LogoPanel imageUrl={imageUrl}>
        <button
          className={classes.button}
          type='button'
          onClick={() => handleAddMovieModal()}
        >
          &#43; &#160;
          {buttonName}
        </button>
      </LogoPanel>
      <div className={classes.search_block}>
        <p className={classes.title}>{title}</p>
        <SearchPanel {...searchPanel} />
      </div>
    </div>
  );
};
export default HeroBanner;
