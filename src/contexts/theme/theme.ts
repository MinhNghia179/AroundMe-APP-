import {
  THEME_DARK_VALUE,
  THEME_LIGHT_VALUE,
} from '@app/constants/async-storage';
import { DANGER } from '@app/infrastructure/theme/colors';

export interface Theme {
  error: typeof DANGER;
}

export interface Themes {
  [THEME_DARK_VALUE]: Theme;
  [THEME_LIGHT_VALUE]: Theme;
}

export const themes: Themes = {
  [THEME_LIGHT_VALUE]: {
    error: DANGER,
  },
  [THEME_DARK_VALUE]: {
    error: DANGER,
  },
};
