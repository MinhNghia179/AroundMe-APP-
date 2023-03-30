import { colors } from './colors';
import { fonts, fontSizes, fontWeights } from './fonts';
import { sizes, space } from './tokens';

export const theme = {
  colors,
  sizes,
  space,
  fonts,
  fontSizes,
  fontWeights,
};

export type Theme = typeof theme;
