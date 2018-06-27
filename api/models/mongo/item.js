const mongoose = require('mongoose');
const ItemModel = require('./item-model');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
const connectionString = `mongodb://${user}:${password}@${host}:${port}`;

function createItem(properties, callback) {
  mongoose.connect(connectionString).then(
    () => {
      const newItem = new ItemModel({
        name: 'Chromecast',
        price: 35,
        stock: 100,
        weight: 1,
      });
      newItem.save((err) => {
        if (err) {
          return callback(err);
        }
        return callback();
      });
    },
    (err) => { callback(`MongoDB connection error: ${err}`); },
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
