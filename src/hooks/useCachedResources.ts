import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { isString } from 'lodash';
import * as React from 'react';
import { Image } from 'react-native';

const cacheImages = (images: (string | number)[]) => {
  return images.map(image => {
    if (isString(image)) {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = (fonts: { [key: string]: string | number }[]) => {
  return fonts.map(font => Font.loadAsync(font));
};

const useCachedResources = () => {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const imageAssets = cacheImages([
          require(''),
          require(''),
          require(''),
        ]);
        const fontAssets = cacheFonts([
          {
            'Alkatra-Bold': require('@app/assets/fonts/Alkatra-Bold.ttf'),
            'Alkatra-Medium': require('@app/assets/fonts/Alkatra-Medium.ttf'),
            'Alkatra-Regular': require('@app/assets/fonts/Alkatra-Regular.ttf'),
            'Alkatra-SemiBold': require('@app/assets/fonts/Alkatra-SemiBold.ttf'),
          },
        ]);
        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return { appIsReady };
};

export default useCachedResources;
