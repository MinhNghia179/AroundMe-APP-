import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { Theme, themes } from './theme';

export type ThemeContextType = {
  themeState: Theme;
  toggleTheme: () => void;
};
export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [themeState, setThemeState] = useState<Theme>(themes.light);

  const toggleTheme = async () => {};

  useEffect(() => {}, []);

  return (
    <ThemeContext.Provider value={{ themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
