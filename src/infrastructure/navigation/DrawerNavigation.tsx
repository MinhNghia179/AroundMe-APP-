import { APP_SCREENS } from '@app/constants/screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import TabNavigator from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={APP_SCREENS.HOME}
      useLegacyImplementation
      screenOptions={{}}>
      <Drawer.Screen
        name={APP_SCREENS.HOME}
        component={TabNavigator}
        options={{}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
