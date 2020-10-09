import React from 'react';
import { themeConfig } from '../config/themeConfig';
const { View, Image, StyleSheet, Dimensions, Text } = require('react-native');
const { TextInput } = require('react-native-gesture-handler');

function InputField(props) {
  const {
    isShowInputIcon = false,
    inputIconSrc,
    isShowInputText,
    showInputTextIconSrc,
    style,
    disableError = true,
    error = '',
    ...inputProps
  } = props;

  return (
    <View
      style={{flex: 1}}
    >
      <View
        style={{
          ...style,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'stretch'
        }}
      >
        {isShowInputIcon && (
          <Image style={styles.inlineImg} source={inputIconSrc} />
        )}
        <TextInput
          {...inputProps}
          style={{
            ...styles.input,
            borderColor: disableError ? themeConfig.color.primary_button : themeConfig.color.secondary_button,
          }}
          // placeholderTextColor="black"
          // placeholder="lllll"
          underlineColorAndroid="transparent"
        />
      </View>
      {!disableError && (
        <Text style={styles.error}>{error}</Text>
      )}
    </View>
  );
}
const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  input: {
    backgroundColor: themeConfig.color.white,
    flex: 1,
    height: 50,
    paddingLeft: 45,
    borderRadius: 5,
    borderWidth: 1,
  },
  inlineImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginVertical: 8,
    zIndex: 99,
    width: 22,
    height: 22,
    left: 15,
    top: 6,
  },
  error: {
    color: themeConfig.color.secondary_button,
    paddingLeft: 15,
    paddingTop: 5,
  }
});

export default InputField;
