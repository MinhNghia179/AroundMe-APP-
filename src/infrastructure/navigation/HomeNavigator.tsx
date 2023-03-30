import React from 'react';
import HomePageView from '@app/screens/home/HomePageView';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={HomePageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigator;
