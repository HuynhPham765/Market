import { ActivityIndicator, Text } from 'react-native';

import React from 'react';
import firebase from 'firebase';

const Loading = (props) => {
  const { navigation } = props;

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      navigation.navigate(user ? 'Home' : 'SignIn');
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      });
    });
  }, []);

  return <ActivityIndicator size="large" color="#00ff00" />;
};

export default Loading;
