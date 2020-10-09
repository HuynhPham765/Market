import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import InputField from '../../../components/InputField';
import MyButton from '../../../components/MyButton';
import React from 'react';
import { ResponseStatus } from '../../../services/enum/ResponseStatus';
import { isEmpty } from 'lodash';
import passwordSrc from '../../../images/password.png';
import { signInWithEmail } from '../../../services/authServices';
import { themeConfig } from '../../../config/themeConfig';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import usernameSrc from '../../../images/username.png';

const SignIn = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [disableEmailError, setDisableEmailError] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [disablePasswordError, setDisablePasswordError] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const onEmailChange = (value) => {
    setEmail(value);
    setDisableEmailError(true);
  }

  const onPasswordChange = (value) => {
    setPassword(value);
    setDisablePasswordError(true);
  }

  const checkValidate = () => {
    let isError = false;

    if (isEmpty(email)) {
      isError = true;
      setEmailError('Hãy nhập email');
      setDisableEmailError(false);
    }

    if (isEmpty(password)) {
      isError = true;
      setPasswordError('Hãy nhập mật khẩu');
      setDisablePasswordError(false);
    }

    return isError;
  }

  const handleSignIn = async () => {
    if(!checkValidate()) {
      const res = await signInWithEmail({email, password});
      if (res && res.user) {
        navigation.navigate('Home');
      } else {
        Alert.alert('Error', res.message);
      }
    }
  }

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
        value={email}
        onChangeText={onEmailChange}
        style={{marginTop: themeConfig.spacing.spacing_xl}}
        isShowInputIcon={true}
        inputIconSrc={usernameSrc}
        placeholder="Email"
        keyboardType="email-address"
        disableError={disableEmailError}
        error={emailError}
        placeholderTextColor={themeConfig.color.text_disable}
      />
      <InputField
        value={password}
        onChangeText={onPasswordChange}
        style={{marginTop: themeConfig.spacing.spacing_xl}}
        isShowInputIcon={true}
        inputIconSrc={passwordSrc}
        placeholder="Mật khẩu"
        disableError={disablePasswordError}
        error={passwordError}
        placeholderTextColor={themeConfig.color.text_disable}
      />
      <MyButton
        title="Đăng Nhập"
        onClick={handleSignIn}
      />
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
