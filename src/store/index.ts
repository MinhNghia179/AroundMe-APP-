import AsyncStorage from '@react-native-async-storage/async-storage';
import { RematchDispatch, RematchRootState, init } from '@rematch/core';
import loadingPlugin from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import { RootModel, models } from './models';

const configPersist = createRematchPersist({
  key: 'root',
  storage: AsyncStorage,
  blacklist: [''],
  whitelist: [''],
  version: 1,
});

const store = init({
  models,
  plugins: [configPersist, loadingPlugin()] as any,
});

export default store;

export type Store = typeof store;
export type RootStore = RematchRootState<typeof models>;
export type Dispatch = RematchDispatch<RootModel>;
