import React from 'react';
import { themeConfig } from '../config/themeConfig';
const { View, Image, StyleSheet, Dimensions } = require('react-native');
const { TextInput } = require('react-native-gesture-handler');

function InputField(props) {
  const {
    isShowInputIcon = false,
    inputIconSrc,
    isShowInputText,
    showInputTextIconSrc,
    onChangeText,
    style,
    ...inputProps
  } = props;

  return (
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
        style={styles.input}
        // placeholderTextColor="black"
        // placeholder="lllll"
        underlineColorAndroid="transparent"
        onChangeText={onChangeText}
      />
    </View>
  );
}
const DEVICE_WIDTH = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  input: {
    backgroundColor: themeConfig.color.white,
    flex: 1,
    height: 50,
    // marginHorizontal: themeConfig.spacing.spacing_lg,
    // marginVertical: themeConfig.spacing.spacing_lg,
    paddingLeft: 45,
    borderRadius: 20,
    borderColor: themeConfig.color.primary_button,
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
});

export default InputField;
