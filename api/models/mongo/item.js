const mongoose = require('mongoose');
const ItemSchema = require('./item-schema');

const ItemModel = mongoose.model('Item', ItemSchema);
const connectionString = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}`;

function createItem(properties, callback) {
  mongoose.connect(connectionString).then(
    () => {
      const newItem = new ItemModel({
        name: 'Ipad',
        price: 35,
        stock: 100,
        weight: 1,
      });
      newItem.save().then(
        (docs) => {
          mongoose.connection.close();
          return callback(null, docs);
        },
        (err) => {
          mongoose.connection.close();
          return callback(err);
        },
      );
    },
    err => callback(`MongoDB connection error: ${err}`),
  );
}

function getItems(properties, callback) {
  mongoose.connect(connectionString).then(
    () => {
      ItemModel.find({}, (err, results) => {
        if (err) {
          return callback(err);
        }
        return callback(null, results);
      });
    },
    (err) => { callback(`MongoDB connection error: ${err}`); },
  );
}


module.exports = { createItem, getItems };
