import { Dispatch } from '@app/store';
import React, { useCallback, useState } from 'react';
import { Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useDispatch } from 'react-redux';

const OnBoardingView = () => {
  const dispatch = useDispatch<Dispatch>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [inputValue, setInputValue] = useState<string>('');

  const slides: {
    key: string | number;
    text: string;
    title: string;
    backgroundColor: string;
  }[] = [
    {
      key: 1,
      title: 'Order Your Seed',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      backgroundColor: '',
    },
    {
      key: 2,
      title: 'Follow Planting Instructions',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      backgroundColor: '',
    },
    {
      key: 3,
      title: 'Enjoy Your Little Garden',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      backgroundColor: '',
    },
  ];

  const handleInputChange = useCallback((value: string) => {
    setInputValue(value);
  }, []);

  const changeData = async () => {
    await dispatch.profile.fetchDetailProfile();
  };

  const onDone = () => {};

  const onSkip = () => {};

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
        showSkipButton
        doneLabel="Get Started"
        onDone={onDone}
        onSkip={onSkip}
      />
    </View>
  );
};

export default OnBoardingView;
