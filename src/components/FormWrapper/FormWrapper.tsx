import * as React from 'react';
import movies from '../../mocks/movies';
import getGenresList from '../MoviesGrid/helpers/getGenreList';

import classes from './FormWrapper.module.css';
import type { FormWrapperProps } from './FormWrapper.types';

const FormWrapper = ({ modal_title }: FormWrapperProps) => {
  const genreListToRender = getGenresList(movies);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <p className={classes.form_title}>{modal_title}</p>
      <form onSubmit={handleSubmit}>
        <div className={classes.form_main}>
          <div className={classes.form_left}>
            <div className={classes.input_block}>
              <label htmlFor='title' className={classes.input_title}>
                Title
              </label>
              <input type='text' id='title' placeholder='Enter title' />
            </div>
            <div className={classes.input_block}>
              <label htmlFor='movie_url' className={classes.input_title}>
                Movie url
              </label>
              <input type='text' id='movie_url' placeholder='https://' />
            </div>
            <div className={classes.input_block}>
              <label htmlFor='genres' className={classes.input_title}>
                Genre
              </label>
              <select value='Select Genre' id='genres' name='genres'>
                <option value='Select Genre' selected>
                  Select Genre
                </option>
                {genreListToRender.map((genre) => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={classes.form_right}>
            <div className={classes.input_block}>
              <label htmlFor='start' className={classes.input_title}>
                Release date:
              </label>
              <input
                type='date'
                id='start'
                name='trip-start'
                value='2018-07-22'
                min='2018-01-01'
                max='2022-12-31'
              />
            </div>
            <div className={classes.input_block}>
              <label htmlFor='movie_url' className={classes.input_title}>
                Rating
              </label>
              <input type='text' id='movie_url' placeholder='7.6' />
            </div>
            <div className={classes.input_block}>
              <label htmlFor='movie_url' className={classes.input_title}>
                Runtime
              </label>
              <input type='text' id='movie_url' defaultValue='1h 47min' />
            </div>
          </div>
        </div>
        <div className={classes.form_textarea}>
          <label htmlFor='description' className={classes.input_title}>
            Overview
          </label>
          <textarea name='description' rows={10} defaultValue='Movie description' />
        </div>
        <div className={classes.button_block}>
          <input className={classes.reset_btn} type='reset' value='Reset' />
          <input className={classes.submit_btn} type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default FormWrapper;
