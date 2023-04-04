import { Text } from '@app/components/elements';
import { getPersistor } from '@rematch/persist';
import React, { PropsWithChildren, memo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store from '.';

const persistor = getPersistor();

const Gate = ({ children }: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        loading={<Text variant="caption">Loading</Text>}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default memo(Gate);
