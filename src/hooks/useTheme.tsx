import { ThemeContext } from '@app/contexts/theme/ThemeContext';
import { useContext } from 'react';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return themeContext?.themeState;
};

export default useTheme;
