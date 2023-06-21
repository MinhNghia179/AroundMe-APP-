import { APP_SCREENS } from '@app/constants/screens';
import HomePageView from '@app/screens/home/HomePageView';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={APP_SCREENS.HOME_DASHBOARD}
        component={HomePageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeNavigator;
