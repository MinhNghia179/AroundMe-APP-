import { PERSISTENCE_KEY } from '@app/constants/async-storage';
import SettingContextProvider from '@app/contexts/setting/SettingContext';
import useCachedResources from '@app/hooks/useCachedResources';
import { Navigation } from '@app/infrastructure/navigation';
import { theme } from '@app/infrastructure/theme';
import AuthenticationContextProvider from '@app/services/authentication/AuthenticationContext';
import Gate from '@app/store/gate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  InitialState,
  LinkingOptions,
  NavigationContainer,
  NavigationState,
} from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { isNull } from 'lodash';
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

const options: LinkingOptions<{}> = {
  prefixes: [],
};

const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);

  const isLoadingComplete = useCachedResources();

  const [InitialState, setInitialState] = useState<InitialState>();

  const onStateChange = (newState: NavigationState | undefined) => {
    return AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(newState));
  };

  useEffect(() => {
    (async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        if (!isNull(savedStateString)) {
          const state = JSON.parse(savedStateString);
          setInitialState(state);
        }
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  if (!isLoadingComplete) {
    return <></>;
  }

  console.log(isLoadingComplete);

  return (
    <ThemeProvider theme={theme}>
      <Gate>
        <SettingContextProvider>
          <AuthenticationContextProvider>
            <NavigationContainer
              initialState={InitialState}
              onStateChange={onStateChange}
              linking={options}
              fallback={<></>}>
              <Navigation></Navigation>
            </NavigationContainer>
          </AuthenticationContextProvider>
        </SettingContextProvider>
      </Gate>
    </ThemeProvider>
  );
};

export default App;
