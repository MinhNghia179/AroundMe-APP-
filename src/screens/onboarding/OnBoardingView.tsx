import { Dispatch, RootStore } from '@app/store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const OnBoardingView = () => {
  const dispatch = useDispatch<Dispatch>();

  const store = useSelector((rootState: RootStore) => rootState);

  const [{ loading, error }, { data }] = [
    store.loading.models.profile,
    store.profile,
  ];

  const changeData = async () => {
    await dispatch.profile.fetchDetailProfile();
  };

  return <></>;
};

export default OnBoardingView;
