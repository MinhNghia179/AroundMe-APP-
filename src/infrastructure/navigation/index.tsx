import {
  AuthenticationContext,
  AuthenticationContextType,
} from '@app/services/authentication/AuthenticationContext';
import React, { useContext } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AccountNavigator from './AccountNavigator';
import AppNavigator from './AppNavigator';

export const Navigation = () => {
  const { isAuthenticate } = useContext(
    AuthenticationContext,
  ) as AuthenticationContextType;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isAuthenticate ? <AppNavigator /> : <AccountNavigator />}
    </SafeAreaView>
  );
};
