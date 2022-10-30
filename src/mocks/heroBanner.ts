import logo from '../assets/images/logo.png';
import { HeroBannerProps } from '../components/HeroBanner/HeroBanner';
import { SearchPanelProps } from '../components/SearchPanel/SearchPanel';

const searchPanelProps: SearchPanelProps = {
  placeholderText: 'What do you want to watch?',
  searchButton: 'search',
};

const heroBannerProps: HeroBannerProps = {
  buttonName: 'add movie',
  imageUrl: logo,
  searchPanel: searchPanelProps,
  title: 'find your movie',
};

export default heroBannerProps;
