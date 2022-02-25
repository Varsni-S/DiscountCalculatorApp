import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import LottieView from 'lottie-react-native';
import '../initI18next';
import {useTranslation} from 'react-i18next';

export default function Translation() {
  const {t, i18n} = useTranslation();
  console.log(i18n.language);

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

      <View>
        <Text style={styles.text}>{t('Welcome')}</Text>
        <Button
          style={styles.button}
          onPress={() => {
            i18n.changeLanguage('tn');
          }}
          title="Change to tamil"
        />
        <Button
          style={styles.button}
          onPress={() => {
            i18n.changeLanguage('en');
          }}
          title="Change to english"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 200,
    height: 300,
    marginLeft: 20,
  },
  button: {
    margin: 15,
    width: 150,
    marginLeft: 120,
  },
  text: {
    textAlign: 'center',
    //   marginLeft: 125,
  },
});
