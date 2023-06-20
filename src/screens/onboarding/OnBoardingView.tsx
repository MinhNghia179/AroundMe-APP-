import { Dispatch } from '@app/store';
import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

const OnBoardingView = () => {
  const dispatch = useDispatch<Dispatch>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const changeData = async () => {
    await dispatch.profile.fetchDetailProfile();
  };

  return (
    <View>
      <Text>On Boarding Screen</Text>
    </View>
  );
};

export default OnBoardingView;
