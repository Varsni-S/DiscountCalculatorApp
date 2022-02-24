import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import React from 'react';
import Header from './Header';
import {useForm, Controller} from 'react-hook-form';

export default function HookForm() {
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <View>
      <Header name="Hook Form" />
      <View style={{padding: 20, marginTop: 15}}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Email Id"
              style={styles.input}
              onBlur={onBlur}
              theme={{colors: {primary: '#ff751a'}}}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{required: true}}
          // defaultValue=""
        />
        {errors.email && <Text> Email is required.</Text>}
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Password"
              style={styles.input}
              onBlur={onBlur}
              theme={{colors: {primary: '#ff751a'}}}
              secureTextEntry={true}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{required: true}}
          // defaultValue=""
        />
        {errors.password?.type === 'required' && (
          <Text>Password is required.</Text>
        )}

        {errors.password?.type === 'minLength' && (
          <Text>Minimum 8 characters are required</Text>
        )}
        <TouchableOpacity>
          <Button
            mode="contained"
            theme={{colors: {primary: '#cc2900'}}}
            style={styles.button}
            onPress={handleSubmit(data => {
              console.log(data);
            })}>
            <Text style={{color: 'white'}}>Submit</Text>
          </Button>
        </TouchableOpacity>

        <TouchableOpacity>
          <Button
            mode="contained"
            theme={{colors: {primary: '#cc2900'}}}
            style={styles.button}
            onPress={() => {
              reset({
                email: '',
                password: '',
              });
            }}>
            <Text style={{color: 'white'}}>Reset</Text>
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    margin: 20,
  },
  button: {
    marginTop: 40,
    marginLeft: 120,
    color: 'white',
    height: 40,
    width: 100,
    backgroundColor: '#cc2900',
    borderRadius: 4,
  },
});
