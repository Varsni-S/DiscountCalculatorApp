import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from './Header';

export default function Login() {
  return (
    <View>
      <Header name="Login Page" />
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="UserName" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Button style={styles.button} title="Login" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    margin: 40,
  },
  buttonContainer: {
    width: 80,
    marginLeft: 100,
    marginTop: 20,
  },
});
