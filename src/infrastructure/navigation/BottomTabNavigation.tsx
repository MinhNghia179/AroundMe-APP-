import { APP_NAVIGATORS } from '@app/constants/screens';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React, { useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign';
import CalenderNavigator from './CalenderNavigator';
import HomeNavigator from './HomeNavigator';
import ProfileNavigator from './ProfileNavigator';
import StartRunNavigator from './StartRunNavigator';

const Tab = createMaterialBottomTabNavigator();

const getWidth = () => {
  let width = Dimensions.get('window').width;
  width = width - 80;
  return width / 5;
};

const CustomTabBarButton = (props: any) => {
  return (
    <TouchableOpacity>
      <View style={styles.btnPlus}>
        <Image
          source={require('../../assets/icons/plus.png')}
          style={{
            width: 26,
            height: 26,
            tintColor: 'white',
          }}></Image>
      </View>
    </TouchableOpacity>
  );
};

const TabNavigator = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        keyboardHidesNavigationBar
        activeColor="#DEB887"
        labeled={false}
        initialRouteName={APP_NAVIGATORS.HOME}
        barStyle={[styles.customBar]}
        sceneAnimationEnabled
        backBehavior="history">
        <Tab.Screen
          name={APP_NAVIGATORS.HOME}
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name={APP_NAVIGATORS.CALENDER}
          component={CalenderNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26} />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 1.15,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name={APP_NAVIGATORS.START_RUN}
          component={StartRunNavigator}
          options={{
            tabBarIcon: props => <CustomTabBarButton {...props} />,
          }}
        />
        <Tab.Screen
          name={APP_NAVIGATORS.SETTING}
          component={CalenderNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="setting" color={color} size={26} />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.5,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name={APP_NAVIGATORS.PROFILE}
          component={ProfileNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="profile" color={color} size={26} />
            ),
          }}
          listeners={({ navigation, route }) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4.65,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 20,
          height: 4,
          backgroundColor: '#DEB887',
          position: 'absolute',
          bottom: 72,
          left: 30,
          borderRadius: 20,
          transform: [{ translateX: tabOffsetValue }],
        }}></Animated.View>
    </>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  btnPlus: {
    width: 40,
    height: 40,
    top: -10,
    backgroundColor: '#DEB887',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: Platform.OS == 'android' ? 80 : 30,
  },
  customBar: {
    backgroundColor: '#ffff',
    justifyContent: 'center',
    position: 'absolute',
    margin: 15,
    overflow: 'hidden',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    height: 60,
    zIndex: 0,
  },
});
