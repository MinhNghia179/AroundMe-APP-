import { Theme } from '@app/infrastructure/theme/index';
import { Text } from 'react-native';
import styled from 'styled-components';

type Variant = 'error' | 'success' | 'body' | 'caption' | 'title';

const defaultTextStyles = (theme: Theme) => `
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
  color: ${theme.colors.text.primary};
  font-family: ${theme.fonts.regular};
  font-weight: ${theme.fontWeights.regular};
`;

const error = (theme: Theme) => `
  color: ${theme.colors.text.error};
`;

const success = (theme: Theme) => `
  color: ${theme.colors.text.success};
`;

const body = (theme: Theme) => `
  font-size: ${theme.fontSizes.body};
`;

const caption = (theme: Theme) => `
  font-size: ${theme.fontSizes.caption}
`;

const title = (theme: Theme) => `
  font-size: ${theme.fontSizes.title}
`;

const variants = {
  error,
  success,
  body,
  caption,
  title,
};

export const CustomText = styled(Text)`
  ${({ theme }: { theme: Theme }) => defaultTextStyles(theme)};
  ${({ variant, theme }: { variant?: Variant; theme: Theme }) =>
    variants[variant ?? 'body'](theme)};
`;
