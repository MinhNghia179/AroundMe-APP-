import { APP_SCREENS } from '@app/constants/screens';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import DrawerNavigator from './DrawerNavigation';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={APP_SCREENS.HOME}
        component={DrawerNavigator}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
