import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import InputField from '../../../components/InputField';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import passwordSrc from '../../../images/password.png';
import { themeConfig } from '../../../config/themeConfig';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import usernameSrc from '../../../images/username.png';

const SignIn = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    headerShown: false,
  });
  const [] = useState('');
  const [] = useState('');

  return (
    <View
      // flex={1}
      style={{
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between'
      }}
    >
      <InputField
        style={{marginTop: themeConfig.spacing.spacing_xl}}
        isShowInputIcon={true}
        inputIconSrc={usernameSrc}
        placeholder="Email"
        placeholderTextColor="#000"
      />
      <InputField
        style={{marginTop: themeConfig.spacing.spacing_xl}}
        isShowInputIcon={true}
        inputIconSrc={passwordSrc}
        placeholder="Mat Khau"
        placeholderTextColor="#000"
      />
      <TouchableOpacity style={styles.button}>
        <Text> DD </Text>
      </TouchableOpacity>
    </View>
  );
};

const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  button: {
    marginTop: themeConfig.spacing.spacing_xl,
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
  },
});

export default SignIn;
