import * as React from 'react';

import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { noop } from 'lodash';
import { themeConfig } from "../config/themeConfig";

const MyButton = (props) => {

  const { style, title, textColor = themeConfig.color.white, onClick = noop } = props;
  const myStyle = {
    marginTop: themeConfig.spacing.spacing_xl,
    backgroundColor: themeConfig.color.primary_button,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    ...style,
  }

  return (
    <TouchableOpacity style={myStyle} onPress={onClick}>
      <Text style={{color: textColor}}> {title} </Text>
    </TouchableOpacity>
  )
}

export default MyButton;