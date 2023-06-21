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
        name="DrawerNavigatorScreen"
        component={DrawerNavigator}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
