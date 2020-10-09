import * as React from 'react';

import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SceneMap, TabBar, TabView } from "react-native-tab-view";

import { ScrollView } from "react-native-gesture-handler";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import logoSrc from '../../images/logo.png';
import { themeConfig } from '../../config/themeConfig';
import { useNavigation } from '@react-navigation/native';

const SignInSignUp = (props) => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  
  const initialLayout = { width: Dimensions.get('window').width };

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Đăng Nhập' },
    { key: 'second', title: 'Đăng Kí' },
  ]);
 
  const renderScene = SceneMap({
    first: SignIn,
    second: SignUp,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={themeConfig.color.primary_button}
      inactiveColor={themeConfig.color.black}
      indicatorStyle={{ backgroundColor: themeConfig.color.primary_button }}
      style={{ backgroundColor: '#EEE'}}
    />
  );
  
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.select({
          ios: 0,
          android: 500,
        })}
      >
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            marginTop: 100,
          }}>
            <Image source={logoSrc} style={styles.image} />
            <Text style={styles.text}> H & N Market </Text>
            
          </View>
          <View style={{flex:1, margin: 20}}>
              <TabView
                renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
              />
            </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    margin: 20,
    padding: 20,
  },
  text: {
    color: themeConfig.color.primary_button,
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default SignInSignUp;