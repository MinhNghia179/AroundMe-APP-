import { ACCOUNT_SCREENS } from '@app/constants/screens';
import AuthenticatePageView from '@app/screens/authenticateOTP/AuthenticatePageView';
import LoginPageView from '@app/screens/login/LoginPageView';
import OnBoardingView from '@app/screens/onboarding/OnBoardingView';
import RegisterPageView from '@app/screens/register/RegisterPageView';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ACCOUNT_SCREENS.ONBOARDING}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ACCOUNT_SCREENS.ONBOARDING}
        component={OnBoardingView}></Stack.Screen>
      <Stack.Screen
        name={ACCOUNT_SCREENS.LOGIN}
        component={LoginPageView}></Stack.Screen>
      <Stack.Screen
        name={ACCOUNT_SCREENS.REGISTER}
        component={RegisterPageView}></Stack.Screen>
      <Stack.Screen
        name={ACCOUNT_SCREENS.AUTHENTICATE_OTP}
        component={AuthenticatePageView}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigator;
