import { APP_SCREENS } from '@app/constants/screens';
import ProfilePageView from '@app/screens/profile/ProfilePageView';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const StartRunNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={APP_SCREENS.START_RUN_DASHBOARD}
        component={ProfilePageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StartRunNavigator;
