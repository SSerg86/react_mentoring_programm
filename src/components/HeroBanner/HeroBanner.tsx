import React from 'react';
import SearchPanel, { SearchPanelProps } from '../SearchPanel/SearchPanel';

import classes from './HeroBanner.module.css';

export interface HeroBannerProps {
  buttonName: string;
  imageUrl: string;
  title?: string;
  searchPanel?: SearchPanelProps;
  handleAddMovieModal?: () => void;
}

const HeroBanner = ({
  imageUrl,
  buttonName,
  searchPanel,
  title,
  handleAddMovieModal,
}: HeroBannerProps) => (
  <div className={classes.main}>
    <div className={classes.logo_block}>
      <img src={imageUrl} alt='Logo' />
      <button
        className={classes.button}
        type='button'
        onClick={() => handleAddMovieModal()}
      >
        &#43; &#160;
        {buttonName}
      </button>
    </div>
    <div className={classes.search_block}>
      <p className={classes.title}>{title}</p>
      <SearchPanel {...searchPanel} />
    </div>
  </div>
);
export default HeroBanner;