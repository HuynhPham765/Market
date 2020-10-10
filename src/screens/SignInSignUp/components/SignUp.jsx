import { Alert, View } from 'react-native';

import AwesomeAlert from 'react-native-awesome-alerts';
import InputField from '../../../components/InputField';
import MyButton from '../../../components/MyButton';
import React from 'react';
import { isEmpty } from 'lodash';
import passwordSrc from '../../../images/password.png';
import { signUpWithEmail } from '../../../services/authServices';
import { themeConfig } from '../../../config/themeConfig';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import usernameSrc from '../../../images/username.png';
import MyAlertDialog, { DialogType } from '../../../components/MyAlertDialog';

const SignUp = () => {
  const navigation = useNavigation();
  const [notiMessage, setNotiMessage] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [email, setEmail] = useState('');
  const [disableEmailError, setDisableEmailError] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [disablePasswordError, setDisablePasswordError] = useState(true);
  const [passwordError, setPasswordError] = useState('');

  const onEmailChange = (value) => {
    setEmail(value);
    setDisableEmailError(true);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
    setDisablePasswordError(true);
  };

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
  };

  const onConfirmDialog = () => {
    setShowDialog(false);
  };

  const handleSignUp = async () => {
    if (!checkValidate()) {
      const res = await signUpWithEmail({ email, password });
      if (res && res.user) {
        //do something
        Alert.alert('Đăng kí thành công');
        // setNotiMessage('Đăng kí thành công');
        // setShowDialog(true);
        setEmail('');
        setPassword('');
      } else {
        Alert.alert('Đã xảy ra lỗi', res.message);
        // setNotiMessage('Đã xảy ra lỗi');
        // setShowDialog(true);
      }
    }
  };

  return (
    <View
      flex={1}
      style={{
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
      }}
    >
      <InputField
        value={email}
        style={{ marginTop: themeConfig.spacing.spacing_xl }}
        isShowInputIcon={true}
        inputIconSrc={usernameSrc}
        placeholder="Email"
        disableError={disableEmailError}
        error={emailError}
        placeholderTextColor={themeConfig.color.text_disable}
        onChangeText={onEmailChange}
      />
      <InputField
        value={password}
        style={{ marginTop: themeConfig.spacing.spacing_xl }}
        isShowInputIcon={true}
        inputIconSrc={passwordSrc}
        placeholder="Mật khẩu"
        disableError={disablePasswordError}
        error={passwordError}
        placeholderTextColor={themeConfig.color.text_disable}
        onChangeText={onPasswordChange}
      />
      <MyButton title="Đăng Kí" onClick={handleSignUp} />
      <MyAlertDialog message={notiMessage} type={DialogType.CONFIRM} show={showDialog} onConfirm={onConfirmDialog} />
    </View>
  );
};

export default SignUp;
