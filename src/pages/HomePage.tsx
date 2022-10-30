import React from 'react';
import Footer from '../components/Footer/Footer';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import MoviesGrid from '../components/MoviesGrid/MoviesGrid';
import heroBannerProps from '../mocks/heroBanner';
import movies from '../mocks/movies';

const HomePage = () => (
  <>
    <HeroBanner {...heroBannerProps} />
    <MoviesGrid movies={movies} />
    <Footer imageUrl={heroBannerProps.imageUrl} />
  </>
);

export default HomePage;
