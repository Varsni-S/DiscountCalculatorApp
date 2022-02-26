// import React, {useState} from 'react';
// import {
//   SafeAreaView,
//   Text,
//   StatusBar,
//   FlatList,
//   View,
//   TouchableOpacity,
// } from 'react-native';
// import realm, {
//   getAllProducts,
//   addProduct,
//   deleteAllProducts,
//   updateAllProductQuantity,
//   getBigProducts,
//   getAllUsers,
//   addUser,
//   getUserById,
//   deleteAllUsers,
// } from '../Database';

// const Realm = () => {
//   // Set initial states
//   const [products, setProduct] = useState(getAllProducts());
//   const [user, setUser] = useState(getAllUsers());

//   // Render
//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       <SafeAreaView style={{padding: 16}}>
//         {/* Our buttons for products */}
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text
//             style={{paddingTop: 8}}
//             onPress={() => {
//               // Create a product with random amount of pages and user by id 0.
//               addProduct(
//                 'Watch',
//                 Math.floor(Math.random() * 500),
//                 null,
//                 getUserById(0)[0],
//               );
//               setProduct(getAllProducts());
//             }}>
//             Add Product
//           </Text>

//           <Text
//             style={{paddingTop: 8}}
//             onPress={() => {
//               updateAllProductQuantity();
//               setProduct(getAllProducts());
//             }}>
//             Update quantity
//           </Text>

//           <Text
//             style={{paddingTop: 8}}
//             onPress={() => {
//               deleteAllProducts();
//               setProduct(getAllProducts());
//             }}>
//             Delete all Products
//           </Text>
//         </View>

//         {/* List for all products */}
//         <Text style={{marginTop: 8, fontWeight: 'bold'}}>products</Text>
//         <FlatList
//           data={products}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({item, index}) => {
//             return (
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <Text>{item.productName}</Text>
//                 <Text>{item.price}</Text>
//                 <Text>{item.quantity === null ? 'null' : item.quantity}</Text>
//                 <Text>
//                   {item.user === null
//                     ? 'null'
//                     : item.user.firstName + ' ' + item.user.lastName}
//                 </Text>
//               </View>
//             );
//           }}
//         />

//         {/* Divider */}
//         <View
//           style={{
//             width: '100%',
//             backgroundColor: '#000000',
//             height: 1,
//             marginVertical: 8,
//           }}
//         />

//         {/* Our buttons for user */}
//         <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//           <Text
//             style={{paddingTop: 8}}
//             onPress={() => {
//               addUser('FirstN', 'LastN');
//               setProduct(getAllProducts());
//             }}>
//             Add user
//           </Text>

//           <Text
//             style={{paddingTop: 8}}
//             onPress={() => {
//               deleteAllUsers();
//               setProduct(getAllProducts());
//             }}>
//             Delete all user
//           </Text>
//         </View>

//         {/* List for all user */}
//         <Text style={{marginTop: 8, fontWeight: 'bold'}}>user</Text>
//         <FlatList
//           data={user}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({item, index}) => {
//             return (
//               <View
//                 style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                 <Text>{item.id}</Text>
//                 <Text>{item.firstName + ' ' + item.lastName}</Text>
//               </View>
//             );
//           }}
//         />
//       </SafeAreaView>
//     </>
//   );
// };

// export default Realm;

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import realm, {
  getAllBooks,
  addBook,
  deleteAllBooks,
  updateAllBookEditions,
  getBigBooks,
  getAllAuthors,
  getAuthorById,
  addAuthor,
  deleteAllAuthors,
  getAvgPages,
} from '../Database';

const Realm = () => {
  // Set initial states
  const [books, setBooks] = useState(getAllBooks());
  const [authors, setAuthors] = useState(getAllAuthors());

  // Render
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{padding: 16}}>
        {/* Our buttons for books */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{paddingTop: 8}}
            onPress={() => {
              // Create a book with random amount of pages and author by id 0.
              addBook(
                'Chronicles of JavaScript',
                Math.floor(Math.random() * 500),
                null,
                getAuthorById(0)[0],
              );
              setBooks(getAllBooks());
            }}>
            Add book
          </Text>

          <Text
            style={{paddingTop: 8}}
            onPress={() => {
              updateAllBookEditions();
              setBooks(getAllBooks());
            }}>
            Update edition
          </Text>

          <Text
            style={{paddingTop: 8}}
            onPress={() => {
              deleteAllBooks();
              setBooks(getAllBooks());
            }}>
            Delete all books
          </Text>
        </View>

        {/* List for all books */}
        <Text style={{marginTop: 8, fontWeight: 'bold'}}>Books</Text>
        <FlatList
          data={books}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.title}</Text>
                <Text>{item.pages}</Text>
                <Text>{item.edition === null ? 'null' : item.edition}</Text>
                <Text>
                  {item.author === null
                    ? 'null'
                    : item.author.firstName + ' ' + item.author.lastName}
                </Text>
              </View>
            );
          }}
        />

        {/* Divider */}
        <View
          style={{
            width: '100%',
            backgroundColor: '#000000',
            height: 1,
            marginVertical: 8,
          }}
        />

        {/* Our buttons for authors */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{paddingTop: 8}}
            onPress={() => {
              addAuthor('FirstN', 'LastN');
              setBooks(getAllBooks());
            }}>
            Add author
          </Text>

          <Text
            style={{paddingTop: 8}}
            onPress={() => {
              deleteAllAuthors();
              setBooks(getAllBooks());
            }}>
            Delete all authors
          </Text>
        </View>

        {/* List for all authors */}
        <Text style={{marginTop: 8, fontWeight: 'bold'}}>Authors</Text>
        <FlatList
          data={authors}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{item.id}</Text>
                <Text>{item.firstName + ' ' + item.lastName}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Realm;
