import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import CalenderPageView from '@app/screens/calender/CalenderPageView';

const Stack = createStackNavigator();

const CalenderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={CalenderPageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CalenderNavigator;
