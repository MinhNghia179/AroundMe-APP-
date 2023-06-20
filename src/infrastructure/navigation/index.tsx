import { RootStore } from '@app/store';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import AccountNavigator from './AccountNavigator';
import AppNavigator from './AppNavigator';

export const Navigation = () => {
  const { isAuthenticate } = useSelector((state: RootStore) => state.auth);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isAuthenticate ? <AppNavigator /> : <AccountNavigator />}
    </SafeAreaView>
  );
};
