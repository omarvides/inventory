const itemModel = require('../models/item');

function getItems() {
  itemModel.connect();
}

module.exports = { getItems };
