import React, { PropsWithChildren } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

type Size = 'h1' | 'h2' | 'h3' | 'body' | 'caption';
type FontWeight = 'regular' | 'bold' | 'semibold' | 'medium';
type TextAlight = 'left' | 'center' | 'right';
type Variant =
  | 'success'
  | 'info'
  | 'error'
  | 'disabled'
  | 'primary'
  | 'inverse';

type RNTextProps = {
  color?: string;
  size?: Size;
  variant?: Variant;
  fontWeight?: FontWeight;
  textAlight?: TextAlight;
} & PropsWithChildren &
  TextProps;

const RNText = (props: RNTextProps) => {
  const {
    children,
    variant = 'primary',
    size = 'regular',
    fontWeight = 'regular',
    ...rest
  } = props;

  return (
    <Text {...rest} style={[styles.common]}>
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
  h1: {
    fontSize: 32,
    lineHeight: 38,
  },
  h2: {
    fontSize: 24,
    lineHeight: 28,
  },
  h3: {
    fontSize: 18,
    lineHeight: 26,
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 12,
  },
  error: {},
  disabled: {},
  primary: {},
  success: {},
  inverse: {},
  bold: {},
  semibold: {},
  medium: {},
});
