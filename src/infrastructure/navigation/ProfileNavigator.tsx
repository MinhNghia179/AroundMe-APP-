import React from 'react';

import ProfilePageView from '@app/screens/profile/ProfilePageView';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={ProfilePageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
