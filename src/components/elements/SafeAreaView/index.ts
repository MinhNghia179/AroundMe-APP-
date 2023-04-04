import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';

const defaultSafeAreViewStyles = () => `
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

export const CustomSafeAreView = styled(SafeAreaView)`
  ${() => defaultSafeAreViewStyles()}
`;
