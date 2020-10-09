import * as firebase from 'firebase';

import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/Home/Home';
import Loading from './src/screens/Loading/Loading';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import SignInSignUp from './src/screens/SignInSignUp/SignInSignUp';
import { createStackNavigator } from '@react-navigation/stack';

const firebaseConfig = {
  apiKey: 'AIzaSyD-91SDb_f7Tic9kdn-PL93EHv3GghKB58',
  authDomain: 'market-8d0e1.firebaseapp.com',
  databaseURL: 'https://market-8d0e1.firebaseio.com',
  projectId: 'market-8d0e1',
  storageBucket: 'market-8d0e1.appspot.com',
  messagingSenderId: '609515322378',
  appId: '1:609515322378:web:4eb263e8be124babe4b3f3',
  measurementId: 'G-MYRLPDVY5F',
};
// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInSignUp">
        {/* <Stack.Screen name="Loading" component={Loading}></Stack.Screen> */}
        <Stack.Screen
          name="SignInSignUp"
          component={SignInSignUp}
          options={{
            headerTitleAlign: 'center',
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        ></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
