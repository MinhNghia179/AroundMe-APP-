import { Theme } from '@app/infrastructure/theme/index';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';

type CustomViewProps = {
  theme: Theme;
};

const defaultSafeAreViewStyles = (theme: Theme) => `
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const CustomSafeAreView = styled(SafeAreaView)`
  ${({ theme }: CustomViewProps) => defaultSafeAreViewStyles(theme)}
`;
