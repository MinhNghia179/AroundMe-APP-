import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import HomePageView from '@app/screens/home/HomePageView';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={HomePageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigator;
