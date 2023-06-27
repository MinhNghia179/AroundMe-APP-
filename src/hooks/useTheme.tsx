import { ThemeContext } from '@app/contexts/theme/ThemeContext';
import { useContext } from 'react';

const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  return {
    theme: themeContext?.themeState,
    toggle: themeContext?.toggleTheme,
  };
};

export default useTheme;
