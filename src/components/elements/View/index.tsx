import { Theme } from '@app/infrastructure/theme';
import { View } from 'react-native';
import styled from 'styled-components';

type SpacerProps = {
  theme: Theme;
};

const defaultCustomView = (theme: Theme) => ``;

const CustomView = styled(View)`
  ${(props: SpacerProps) => defaultCustomView(props.theme)}
`;

export default CustomView;
