import React from 'react';
import CalenderPageView from '@app/screens/calender/CalenderPageView';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const CalenderNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={CalenderPageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CalenderNavigator;
