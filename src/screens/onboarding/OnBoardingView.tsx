import { Dispatch, RootStore } from '@app/store';
import React, { startTransition, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const OnBoardingView = () => {
  const dispatch = useDispatch<Dispatch>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');
  const store = useSelector((rootState: RootStore) => rootState);

  const [{ loading, error }, { data }] = [
    store.loading.models.profile,
    store.profile,
  ];

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
    startTransition(() => {
      setSearchQuery(value);
    });
  }, []);

  const changeData = async () => {
    await dispatch.profile.fetchDetailProfile();
  };

  return <></>;
};

export default OnBoardingView;
