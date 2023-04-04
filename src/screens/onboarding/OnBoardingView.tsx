import { SafeView, Text } from '@app/components/elements';
import { Dispatch, RootStore } from '@app/store';
import React from 'react';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

const OnBoardingView = () => {
  const dispatch = useDispatch<Dispatch>();

  const data = useSelector((state: RootStore) => state.profile.data);

  const changeData = () => {
    dispatch.profile.setData(10);
  };

  console.log(data);

  return (
    <SafeView>
      <Text>OnBoardingView {data}</Text>
      <Button onPress={changeData} title="Press Me" />
    </SafeView>
  );
};

export default OnBoardingView;
