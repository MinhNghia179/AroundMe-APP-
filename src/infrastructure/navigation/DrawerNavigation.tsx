import useTheme from '@app/hooks/useTheme';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import TabNavigator from './BottomTabNavigation';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const { theme } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme?.primary_100 }}>
      {/* Custom Header Components */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="DrawerScreen"
      screenOptions={{
        title: 'Around Me',
      }}>
      <Drawer.Screen name="Dashboard" component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
