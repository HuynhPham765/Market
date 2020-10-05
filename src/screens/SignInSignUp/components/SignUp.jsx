import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import InputField from '../../../components/InputField';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import passwordSrc from '../../../images/password.png';
import { themeConfig } from '../../../config/themeConfig';
import { useState } from 'react';
import usernameSrc from '../../../images/username.png';

const SignUp = () => {
  const [] = useState('');
  const [] = useState('');

  return (
    <View
      flex={1}
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
        placeholder="Mật Khẩu"
        placeholderTextColor="#000"
      />
      <TouchableOpacity style={styles.button}>
        <Text textAlign="center">My button</Text>
      </TouchableOpacity>
    </View>
  );
};

const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  button: {
    // textAlign: 'center',
    backgroundColor: '#0066FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    // marginHorizontal: 20,
    // marginVertical: 20,
    borderRadius: 5,
  },
});

export default SignUp;
