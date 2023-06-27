import { THEME_KEY } from '@app/constants/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

  const toggleTheme = async () => {
    const theme = themeState === themes.light ? themes.dark : themes.light;
    await AsyncStorage.setItem(THEME_KEY, JSON.stringify(theme));
    setThemeState(theme);
  };

  useEffect(() => {
    async function loadResourceThemeAsync() {
      const theme = await AsyncStorage.getItem(THEME_KEY);
      if (theme !== null) {
        setThemeState(JSON.parse(theme));
      }
    }
    loadResourceThemeAsync();
  }, []);

  return (
    <ThemeContext.Provider value={{ themeState, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
