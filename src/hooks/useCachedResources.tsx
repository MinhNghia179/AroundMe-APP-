import {
  EMPTY_SCREEN_KEY,
  EMPTY_STATE_KEY,
  INTRO_KEY,
} from '@app/constants/cache-images';
import { Assets } from 'react-native-ui-lib';

const useCachedResources = () => {
  Assets.loadAssetsGroup(EMPTY_SCREEN_KEY, {});
  Assets.loadAssetsGroup(EMPTY_STATE_KEY, {});
  Assets.loadAssetsGroup(INTRO_KEY, {});
};

export default useCachedResources;
