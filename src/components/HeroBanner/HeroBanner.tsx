import React from 'react';
import { handleAddMovieModal } from '../../features/modalWindow/modalWindowSlice';
import { useAppDispatch } from '../../hooks/contextHook';
import LogoPanel from '../LogoPanel/LogoPanel';
import SearchPanel from '../SearchPanel/SearchPanel';

import classes from './HeroBanner.module.css';
import { HeroBannerProps } from './HeroBanner.types';

const HeroBanner = ({
  imageUrl,
  buttonName,
  searchPanel,
  title,
}: HeroBannerProps) => {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.main}>
      <LogoPanel imageUrl={imageUrl}>
        <button
          className={classes.button}
          type='button'
          onClick={() => dispatch(handleAddMovieModal())}
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
