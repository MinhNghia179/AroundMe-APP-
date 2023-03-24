import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AccountNavigator from './AccountNavigator';
import AppNavigator from './AppNavigator';

const options: LinkingOptions<{}> = {
  prefixes: [],
};

export const Navigation = () => {
  const isAuthenticate = true;

  return (
    <NavigationContainer linking={options} fallback={<></>}>
      {isAuthenticate ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
