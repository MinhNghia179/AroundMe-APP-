import { SafeView, Text } from '@app/components/elements';
import { Dispatch, RootStore } from '@app/store';
import React from 'react';
import { Button, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const OnBoardingView = () => {
  const dispatch = useDispatch<Dispatch>();

  const store = useSelector((rootState: RootStore) => rootState);
  const { loading, error } = store.loading.models.profile;
  const { data } = store.profile;

  const changeData = async () => {
    await dispatch.profile.fetchDetailProfile();
  };

  return (
    <SafeView>
      <View>
        <Text>OnBoardingView {data} </Text>
        <Button disabled={loading} onPress={changeData} title="Press Me" />
        {error ? <Text variant="error">Something wrong</Text> : null}
      </View>
    </SafeView>
  );
};

export default OnBoardingView;
