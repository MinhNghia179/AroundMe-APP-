import React, { useEffect, useState } from 'react';
import { Alert, TouchableHighlight, View } from 'react-native';
import TouchID from 'react-native-touch-id';
import { Text } from 'react-native-ui-lib';
type BiometryType = 'FaceID' | 'TouchID' | '';

const AuthenticateByBiometric = () => {
  const [currentValue, onValueChange] = useState();
  const [biometryType, setBiometryType] = useState<BiometryType>('');

  const optionalConfigObject = {
    title: 'Authentication Required',
    color: '#e00606',
    fallbackLabel: 'Show PassCode',
  };

  const authenticate = () => {
    TouchID.authenticate('to demo this react native', optionalConfigObject)
      .then(() => {
        Alert.alert('Authenticated Successfully!');
      })
      .catch(Alert.alert('Authenticated Failed!'));
  };

  const pressHandler = () => {
    TouchID.isSupported()
      .then(authenticate)
      .catch(() => {
        Alert.alert('TouchID not supported');
      });
  };

  useEffect(() => {
    TouchID.isSupported().then(value => setBiometryType(value));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <TouchableHighlight onPress={pressHandler}>
        <Text>Authenticate with: {biometryType}</Text>
      </TouchableHighlight>
    </View>
  );
};

export default AuthenticateByBiometric;
