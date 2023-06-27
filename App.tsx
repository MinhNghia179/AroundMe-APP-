import { queryClient } from '@app/configs/react-query';
import { PERSISTENCE_KEY } from '@app/constants/async-storage';
import SettingContextProvider from '@app/contexts/setting/SettingContext';
import ThemeContextProvider from '@app/contexts/theme/ThemeContext';
import useCachedResources from '@app/hooks/useCachedResources';
import { Navigation } from '@app/infrastructure/navigation';
import Gate from '@app/store/gate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  InitialState,
  LinkingOptions,
  NavigationContainer,
  NavigationState,
} from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { isNull } from 'lodash';
import React, { useEffect, useState } from 'react';
import RNBootSplash from 'react-native-bootsplash';

const options: LinkingOptions<{}> = {
  prefixes: [],
};

const App = () => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const { appIsReady } = useCachedResources();

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

  if (!appIsReady || !isReady) {
    return <></>;
  }

  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer
          onReady={() => RNBootSplash.hide()}
          initialState={InitialState}
          onStateChange={onStateChange}
          linking={options}
          fallback={<></>}>
          <Gate>
            <SettingContextProvider>
              <Navigation />
            </SettingContextProvider>
          </Gate>
        </NavigationContainer>
      </QueryClientProvider>
    </ThemeContextProvider>
  );
};

export default App;
