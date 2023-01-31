import { SearchPanelProps } from '../SearchPanel/SearchPanel.types';

export interface HeroBannerProps {
  buttonName: string;
  imageUrl: string;
  title?: string;
  searchPanel?: SearchPanelProps;
}
