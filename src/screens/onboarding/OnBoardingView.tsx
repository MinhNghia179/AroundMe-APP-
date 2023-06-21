import { Dispatch } from '@app/store';
import React, { useCallback, useState } from 'react';
import { Image, Text, View } from 'react-native';
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
    image: any;
    backgroundColor: string;
  }[] = [
    {
      key: 1,
      title: 'Order Your Seed',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: require('../../assets/images/intro1.png'),
      backgroundColor: '',
    },
    {
      key: 2,
      title: 'Follow Planting Instructions',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: require('../../assets/images/intro2.png'),
      backgroundColor: '',
    },
    {
      key: 3,
      title: 'Enjoy Your Little Garden',
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      image: require('../../assets/images/intro3.png'),
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
    <AppIntroSlider
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
      data={slides}
      renderItem={({ item }) => (
        <View>
          <Image
            resizeMode="contain"
            source={item.image}
            style={{ width: '100%' }}
          />
          <Text>{item.title}</Text>
          <Text>{item.text}</Text>
        </View>
      )}
      showSkipButton
      doneLabel="Get Started"
      onDone={onDone}
      onSkip={onSkip}
    />
  );
};

export default OnBoardingView;
