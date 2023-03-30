import {
  AuthenticationContext,
  AuthenticationContextType,
} from '@app/services/authentication/AuthenticationContext';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import AccountNavigator from './AccountNavigator';
import AppNavigator from './AppNavigator';

const options: LinkingOptions<{}> = {
  prefixes: [],
};

export const Navigation = () => {
  const { isAuthenticate } = useContext(
    AuthenticationContext,
  ) as AuthenticationContextType;

  return (
    <NavigationContainer linking={options} fallback={<></>}>
      {isAuthenticate ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
