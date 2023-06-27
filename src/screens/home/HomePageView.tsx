import { Text } from '@app/components/design -system';
import useTheme from '@app/hooks/useTheme';
import React from 'react';
import { Button, View } from 'react-native';

const HomePageView = () => {
  const { toggle } = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <Text>HomePageView</Text>
      <Button onPress={toggle} title="Toggle Color" />
    </View>
  );
};

export default HomePageView;
