import { APP_SCREENS } from '@app/constants';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CalenderNavigator from './CalenderNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={APP_SCREENS.HOME} component={HomeNavigator}></Stack.Screen>
      <Stack.Screen name={APP_SCREENS.CALENDER} component={CalenderNavigator}></Stack.Screen>
      <Stack.Screen name={APP_SCREENS.PROFILE} component={ProfileNavigator}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
