import {
  THEME_DARK_VALUE,
  THEME_LIGHT_VALUE,
} from '@app/constants/async-storage';
import {
  DANGER,
  DT_PRIMARY_025,
  DT_PRIMARY_050,
  DT_PRIMARY_075,
  DT_PRIMARY_100,
  INFO,
  LT_PRIMARY_025,
  LT_PRIMARY_050,
  LT_PRIMARY_075,
  LT_PRIMARY_100,
} from '@app/infrastructure/theme/colors';

export interface Theme {
  error: string;
  info: string;
  primary_025: string;
  primary_050: string;
  primary_075: string;
  primary_100: string;
}

export interface Themes {
  [THEME_DARK_VALUE]: Theme;
  [THEME_LIGHT_VALUE]: Theme;
}

export const themes: Themes = {
  [THEME_LIGHT_VALUE]: {
    error: DANGER,
    info: INFO,
    primary_025: LT_PRIMARY_025,
    primary_050: LT_PRIMARY_050,
    primary_075: LT_PRIMARY_075,
    primary_100: LT_PRIMARY_100,
  },
  [THEME_DARK_VALUE]: {
    error: DANGER,
    info: INFO,
    primary_025: DT_PRIMARY_025,
    primary_050: DT_PRIMARY_050,
    primary_075: DT_PRIMARY_075,
    primary_100: DT_PRIMARY_100,
  },
};
