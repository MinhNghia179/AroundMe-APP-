import React from 'react';
import CalenderPageView from '@app/screens/calender/CalenderPageView';
import { createStackNavigator } from '@react-navigation/stack';
import { APP_SCREENS } from '@app/constants/screens';

const Stack = createStackNavigator();

const CalenderNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={APP_SCREENS.CALENDER_DASHBOARD}
        component={CalenderPageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CalenderNavigator;
