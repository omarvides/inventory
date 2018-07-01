const itemModel = require('../models/mongo/item');

function createItem(callback) {
  itemModel.createItem({}, (err) => {
    if (err) {
      return callback(err);
    }
    return callback();
  });
}

function getItems(callback) {
  itemModel.getItems({}, (err, objects) => {
    if (err) {
      return callback(err);
    }
    return callback(null, objects);
  });
}

module.exports = { createItem, getItems };
