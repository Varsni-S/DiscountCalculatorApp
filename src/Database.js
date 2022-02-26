/* import Realm from 'realm';

// Declare Product Schema
class ProductSchema extends Realm.Object {}
ProductSchema.schema = {
  name: 'Product',
  properties: {
    productName: 'string',
    price: 'int',
    quantity: 'int?',
    user: 'User?',
  },
};

// User schema
class UserSchema extends Realm.Object {}
UserSchema.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    firstName: 'string',
    lastName: 'string',
  },
};

// Create realm
let realm = new Realm({
  schema: [ProductSchema, UserSchema],
  schemaVersion: 4,
});

// Functions
// Return all Products
let getAllProducts = () => {
  return realm.objects('Product');
};

// Add a single product using parameters
let addProduct = (_productName, _price, _quantity = null, _user) => {
  realm.write(() => {
    const product = realm.create('Product', {
      productName: _productName,
      price: _price,
      quantity: _quantity,
      User: _user,
    });
  });
};

// Remove all products from Realm database
let deleteAllProducts = () => {
  realm.write(() => {
    realm.delete(getAllProducts());
  });
};

// Update all product that have a null value as quantity and update it to 1
let updateAllProductQuantity = () => {
  realm.write(() => {
    let products = getAllProducts();
    products.map((item, index) => {
      if (item.quantity === null) {
        item.quantity = 1;
      }
    });
  });
};

// Get all products with more than 4000 price using .filtered()
let getBigProducts = () => {
  return realm.objects('Product').filtered('price > 400');
};

// Get all Users
let getAllUsers = () => {
  return realm.objects('User');
};

// Add a single User using parameters
let addUser = (_firstName, _lastName) => {
  realm.write(() => {
    let _id = 0;
    if (getAllUsers().length > 0) _id = realm.objects('User').max('id') + 1;

    const product = realm.create('User', {
      id: _id,
      firstName: _firstName,
      lastName: _lastName,
    });
  });
};

// Remove all Users from Realm database
let deleteAllUsers = () => {
  realm.write(() => {
    realm.delete(getAllUsers());
  });
};

// Get User by id
let getUserById = _id => {
  return realm.objects('User').filtered(`id = ${_id}`);
};

// Exports
// Export the realm so other files can access it
export default realm;

// Export other functions so other files can access it
export {
  getAllProducts,
  addProduct,
  deleteAllProducts,
  updateAllProductQuantity,
  getBigProducts,
  getAllUsers,
  addUser,
  getUserById,
  deleteAllUsers,
};
 */

import Realm from 'realm';

// Declare Book Schema
class BookSchema extends Realm.Object {}
BookSchema.schema = {
  name: 'Book',
  properties: {
    title: 'string',
    pages: 'int',
    edition: 'int?',
    author: 'Author?',
  },
};
//user
class UserSchema extends Realm.Object {}
UserSchema.schema = {
  name: 'User',
  properties: {
    name: 'string',
    address: 'string',
  },
};

// Author schema
class AuthorSchema extends Realm.Object {}
AuthorSchema.schema = {
  name: 'Author',
  primaryKey: 'id',
  properties: {
    id: 'int',
    firstName: 'string',
    lastName: 'string',
  },
};

// Create realm
let realm = new Realm({
  schema: [BookSchema, UserSchema, AuthorSchema],
  schemaVersion: 4,
});

// Functions
// Return all books
let getAllBooks = () => {
  return realm.objects('Book');
};

// Add a single book using parameters
let addBook = (_title, _pages, _edition = null, _author) => {
  realm.write(() => {
    const book = realm.create('Book', {
      title: _title,
      pages: _pages,
      edition: _edition,
      author: _author,
    });
  });
};

// Remove all books from Realm database
let deleteAllBooks = () => {
  realm.write(() => {
    realm.delete(getAllBooks());
  });
};

// Update all books that have a null value as edition and update it to 1
let updateAllBookEditions = () => {
  realm.write(() => {
    let books = getAllBooks();
    books.map((item, index) => {
      if (item.edition === null) {
        item.edition = 1;
      }
    });
  });
};

// Get all books with more than 400 pages using .filtered()
let getBigBooks = () => {
  return realm.objects('Book').filtered('pages > 400');
};

// Get all authors
let getAllAuthors = () => {
  return realm.objects('Author');
};

// Add a single author using parameters
let addAuthor = (_firstName, _lastName) => {
  realm.write(() => {
    let _id = 0;
    if (getAllAuthors().length > 0) _id = realm.objects('Author').max('id') + 1;

    const book = realm.create('Author', {
      id: _id,
      firstName: _firstName,
      lastName: _lastName,
    });
  });
};

// Remove all authors from Realm database
let deleteAllAuthors = () => {
  realm.write(() => {
    realm.delete(getAllAuthors());
  });
};

// Get author by id
let getAuthorById = _id => {
  return realm.objects('Author').filtered(`id = ${_id}`);
};

// Exports
// Export the realm so other files can access it
export default realm;

// Export other functions so other files can access it
export {
  getAllBooks,
  addBook,
  deleteAllBooks,
  updateAllBookEditions,
  getBigBooks,
  getAllAuthors,
  addAuthor,
  getAuthorById,
  deleteAllAuthors,
};
