import AsyncStorage from '@react-native-async-storage/async-storage';
import { RematchDispatch, RematchRootState, init } from '@rematch/core';
import loadingPlugin, { ExtraModelsFromLoading } from '@rematch/loading';
import createRematchPersist from '@rematch/persist';
import { RootModel, models } from './models';

type FullModel = ExtraModelsFromLoading<RootModel, { type: 'full' }>;

const configPersist = createRematchPersist({
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth'],
  whitelist: [''],
});

const store = init<RootModel, FullModel>({
  models,
  plugins: [configPersist, loadingPlugin({ type: 'full' })] as any,
});

export default store;

export type Store = typeof store;
export type RootStore = RematchRootState<RootModel, FullModel>;
export type Dispatch = RematchDispatch<RootModel>;
