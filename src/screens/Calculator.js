import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../screens/Header';
import {TextInput, Button} from 'react-native-paper';

export default function Calculator() {
  const [priceamt, setPriceAmt] = useState('');
  const [discountamt, setDiscountAmt] = useState('');
  const [finalamt, setFinalAmt] = useState('');
  const [savedamt, setSavedAmt] = useState('');
  const [error, setError] = useState({});

  const submit = () => {
    if (!priceamt && !discountamt) {
      setError({
        msg: 'Please Enter the Amount',
      });
    } else if (!priceamt) {
      setError({
        msg: 'Please Enter Price Amount',
      });
    } else if (!discountamt) {
      setError({
        msg: 'Please Enter Discount Amount',
      });
    } else {
      setFinalAmt(priceamt - (priceamt * discountamt) / 100);
      setSavedAmt(priceamt - (priceamt - (priceamt * discountamt) / 100));
    }
  };

  const reset = () => {
    setPriceAmt('');
    setDiscountAmt('');
    setFinalAmt('');
    setSavedAmt('');
  };

  return (
    <View>
      <Header name="Discount Calculator " />

      <View style={{padding: 20, marginTop: 15}}>
        <TextInput
          label="Price Amount"
          theme={{colors: {primary: '#ff751a'}}}
          keyboardType="number-pad"
          style={styles.input}
          onChangeText={e => setPriceAmt(e)}
          onChange={() => setError({})}
          value={priceamt}
        />

        <TextInput
          label="Discount Amount"
          theme={{colors: {primary: '#ff751a'}}}
          keyboardType="numeric"
          style={styles.input}
          onChangeText={e => setDiscountAmt(e)}
          onChange={() => setError({})}
          value={discountamt}
        />
      </View>

      <Text style={styles.error}>{error ? error.msg : ''}</Text>

      <TouchableOpacity>
        <Button
          mode="contained"
          theme={{colors: {primary: '#cc2900'}}}
          style={styles.calcbtn}
          onPress={() => submit()}>
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
          onPress={() => reset()}>
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
    fontSize: 18,
    color: 'red',
    marginLeft: 90,
  },
});
