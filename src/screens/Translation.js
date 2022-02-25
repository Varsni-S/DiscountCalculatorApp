import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../screens/Header';
import LottieView from 'lottie-react-native';

export default function Translation() {
  return (
    <View>
      <Header name="Translation" />

      <LottieView
        source={require('../../assests/97039-oh-no.json')}
        style={styles.animation}
        speed={3}
        autoPlay
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 300,
    marginLeft: 20,
  },
});
