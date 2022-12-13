import React from 'react';
import { MoviesProvider } from './hooks/MoviesContext';
import HomePage from './pages/HomePage';

const App = () => (
  <MoviesProvider>
    <HomePage />
  </MoviesProvider>
);
export default App;
