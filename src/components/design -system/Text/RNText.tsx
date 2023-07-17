import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type Size = 'h1' | 'h2' | 'h3' | 'body' | 'caption';
type FontWeight = 'regular' | 'bold' | 'semibold' | 'medium';
type TextAlight = 'left' | 'center' | 'right';
type Kind = 'success' | 'info' | 'error' | 'disabled' | 'primary' | 'inverse';

type RNTextProps = {
  color?: string;
  size?: Size;
  kind?: Kind;
  weight?: FontWeight;
  textAlight?: TextAlight;
} & PropsWithChildren &
  TextProps;

const RNText = (props: RNTextProps) => {
  const {
    children,
    kind = 'primary',
    size = 'regular',
    weight = 'regular',
    ...rest
  } = props;

  return (
    <Text style={[styles.common]} {...rest}>
      {children}
    </Text>
  );
};

export default RNText;

export const styles = StyleSheet.create({
  common: {
    fontSize: 14,
    fontFamily: 'Alkatra-Regular',
    marginLeft: 0,
    marginRight: 0,
  },
  h1: {},
  h2: {},
  h3: {},
  body: {},
  caption: {},
  error: {},
  disabled: {},
  primary: {},
  success: {},
  inverse: {},
  bold: {},
  semibold: {},
  medium: {},
});
