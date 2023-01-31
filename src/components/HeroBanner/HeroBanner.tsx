import React from 'react';
import { openAddMovieForm } from '../../features/movieFormPopUp/movieFormPopUpSlice';
import { useAppDispatch } from '../../hooks/contextHook';
import heroBannerProps from '../../mocks/heroBanner';
import LogoPanel from '../LogoPanel/LogoPanel';
import SearchPanel from '../SearchPanel/SearchPanel';

import classes from './HeroBanner.module.css';

const HeroBanner = () => {
  const { buttonName, title } = heroBannerProps;
  const dispatch = useAppDispatch();

  return (
    <div className={classes.main}>
      <LogoPanel>
        <button
          className={classes.button}
          type='button'
          onClick={() => dispatch(openAddMovieForm())}
        >
          &#43; &#160;
          {buttonName}
        </button>
      </LogoPanel>
      <div className={classes.search_block}>
        <p className={classes.title}>{title}</p>
        <SearchPanel />
      </div>
    </div>
  );
};
export default HeroBanner;
