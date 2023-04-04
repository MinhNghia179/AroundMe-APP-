import { getPersistor } from '@rematch/persist';
import React, { PropsWithChildren, memo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from '.';

const persistor = getPersistor();

const LoadingView = () => {
  return <></>;
};

const Gate = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingView />}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default memo(Gate);
