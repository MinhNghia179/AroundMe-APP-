import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { isString } from 'lodash';
import { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useTheme } from 'react-native-paper';

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
  const [appIsReady, setAppIsReady] = useState(false);
  const theme = useTheme();
  useEffect(() => {
    theme.colors.secondaryContainer = 'transperent';
    async function loadResourcesAndDataAsync() {
      try {
        // const imageAssets = cacheImages([
        //   require(''),
        //   require(''),
        //   require(''),
        // ]);
        // const fontAssets = cacheFonts([
        //   {
        //     'Alkatra-Bold': require('src/assets/fonts/Alkatra-Bold.ttf'),
        //     'Alkatra-Medium': require('src/assets/fonts/Alkatra-Medium.ttf'),
        //     'Alkatra-Regular': require('src/assets/fonts/Alkatra-Regular.ttf'),
        //     'Alkatra-SemiBold': require('src/assets/fonts/Alkatra-SemiBold.ttf'),
        //   },
        // ]);
        // await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  return { appIsReady };
};

export default useCachedResources;
