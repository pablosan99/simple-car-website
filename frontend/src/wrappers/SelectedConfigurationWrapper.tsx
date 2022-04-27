import { createContext, useContext } from 'react';
import { Category } from '../types/Types';

type SelectedConfigurationContextType = {
  category: Category;
}

const defaultSelectedConfiguration: SelectedConfigurationContextType = {
  category: 'Unknown',
}

export const SelectedConfigurationContext = createContext<SelectedConfigurationContextType>(defaultSelectedConfiguration);
export const useSelectedConfigurationContext = () => useContext<SelectedConfigurationContextType>(SelectedConfigurationContext);
