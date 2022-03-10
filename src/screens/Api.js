// import { View, Text } from 'react-native'
// import React from 'react'
// import { Item } from 'react-native-paper/lib/typescript/components/List/List';

// export default function  api() {
//     useEffect(() => {
//         fetch('https://dog.ceo/api/breeds/list/all')
//           .then((response) => response.json())
//           .then((json) => setData(json))
//    {       .catch((error) => console.error(error))
//           .finally(() => setLoading(false));
//       }, []);
//   return (
//     <View>
//       <Text> api</Text>
//       <Text>{Item.message} </Text>

//     </View>
//   )
// }
import {View, Text, Button} from 'react-native';
import React, {useEffect} from 'react';
import Header from '../components/Header';

export default function Api() {
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(error => console.log(error));
  });

  return (
    <View>
      <Header name="API Call" />
      <Text>Get api values</Text>
      <Button title="Get " onPress={fetch} />
      <Text>post api values</Text>
      <Button title="Post" />
    </View>
  );
}
