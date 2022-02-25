import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import {TextInput, Button} from 'react-native-paper';
import {useForm, Controller} from 'react-hook-form';

export default function Calculator() {
  const {
    handleSubmit,
    control,
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: {
      priceamt: '',
      discountamt: '',
    },
  });

  const [finalamt, setFinalAmt] = useState('');
  const [savedamt, setSavedAmt] = useState('');

  const onSubmit = data => {
    let price = parseInt(data.priceamt);
    let discount = parseInt(data.discountamt);
    setFinalAmt(price - (price * discount) / 100);
    setSavedAmt(price - (price - (price * discount) / 100));
  };

  // const reset = () => {
  //   setFinalAmt('');
  //   setSavedAmt('');
  // };

  return (
    <View>
      <Header name="Discount Calculator " />

      <View style={{padding: 20, marginTop: 15}}>
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Price Amount"
              theme={{colors: {primary: '#ff751a'}}}
              keyboardType="number-pad"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="priceamt"

          // defaultValue=""
        />
        {errors.priceamt && (
          <Text style={styles.error}>Price Amount is required.</Text>
        )}
        <Controller
          control={control}
          rules={{required: true}}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              label="Discount Amount"
              theme={{colors: {primary: '#ff751a'}}}
              keyboardType="numeric"
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="discountamt"

          // defaultValue=""
        />
        {errors.discountamt && (
          <Text style={styles.error}>Discount Amount is required.</Text>
        )}
      </View>

      {/* <Text style={styles.error}>{error ? error.msg : ''}</Text> */}

      <TouchableOpacity>
        <Button
          mode="contained"
          theme={{colors: {primary: '#cc2900'}}}
          style={styles.calcbtn}
          onPress={handleSubmit(onSubmit)}>
          <Text style={{color: 'white'}}>Calculate</Text>
        </Button>
      </TouchableOpacity>

      <View>
        <Button
          mode="contained"
          theme={{colors: {primary: '#ff751a'}}}
          style={{margin: 20}}>
          <Text style={{color: 'white'}}>Final Amount : Rs {finalamt}</Text>
        </Button>

        <Button
          mode="contained"
          theme={{colors: {primary: '#ff751a'}}}
          style={{margin: 20}}>
          <Text style={{color: 'white'}}>Saved Amount : Rs {savedamt}</Text>
        </Button>
      </View>

      <TouchableOpacity>
        <Button
          mode="contained"
          theme={{colors: {primary: '#cc2900'}}}
          style={styles.calcbtn}
          onPress={() => {
            reset({
              priceamt: '',
              discountamt: '',
              setFinalAmt: '',
              setSavedAmt: '',
            });
          }}>
          <Text style={{color: 'white'}}>Reset</Text>
        </Button>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 10,
  },

  calcbtn: {
    margin: 15,
    width: 150,
    marginLeft: 120,
  },
  error: {
    fontSize: 15,
    color: 'red',
    marginLeft: 40,
  },
});
