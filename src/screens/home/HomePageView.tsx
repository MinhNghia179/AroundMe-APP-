import useTheme from '@app/hooks/useTheme';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import {
  Button,
  Checkbox,
  Chip,
  RadioButton,
  RadioGroup,
  Slider,
} from 'react-native-ui-lib';

const HomePageView = () => {
  const { toggle } = useTheme();
  const [currentValue, onValueChange] = useState();
  return (
    <View style={{ flex: 1 }}>
      <Text>HomePageView 123</Text>
      <Button disabled label={'Press'} size={Button.sizes.large} />
      <Checkbox
        value={false}
        onValueChange={() => console.log('value changed')}
      />
      <Chip
        size={{ width: 50, height: 20 }}
        label={'Chip'}
        onPress={() => console.log('pressed')}
      />

      <RadioGroup initialValue={currentValue} onValueChange={onValueChange}>
        <RadioButton value={'yes'} label={'Yes'} />
        <RadioButton value={'no'} label={'No'} />
      </RadioGroup>

      <Slider
        value={0}
        minimumValue={0}
        maximumValue={10}
        onValueChange={() => console.log('value changed')}
      />
    </View>
  );
};

export default HomePageView;
