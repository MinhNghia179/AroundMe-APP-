import { APP_NAVIGATORS } from '@app/constants/screens';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CalenderNavigator from './CalenderNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={APP_NAVIGATORS.HOME}
      activeColor="black"
      inactiveColor="#3e2465"
      barStyle={{
        backgroundColor: '#ffff',
        borderTopWidth: 0.5,
      }}
      backBehavior="none">
      <Tab.Screen
        name={APP_NAVIGATORS.HOME}
        component={HomeNavigator}
        options={{
          tabBarLabel: APP_NAVIGATORS.HOME,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={APP_NAVIGATORS.CALENDER}
        component={CalenderNavigator}
        options={{
          tabBarLabel: APP_NAVIGATORS.CALENDER,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={APP_NAVIGATORS.SETTING}
        component={CalenderNavigator}
        options={{
          tabBarLabel: APP_NAVIGATORS.SETTING,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name={APP_NAVIGATORS.PROFILE}
        component={ProfileNavigator}
        options={{
          tabBarLabel: APP_NAVIGATORS.PROFILE,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
