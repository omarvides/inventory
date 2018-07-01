function configure(itemModel) {
  return {
    createItem(callback) {
      itemModel.createItem({}, (err) => {
        if (err) {
          return callback(err);
        }
        return callback();
      });
    },
    getItems(callback) {
      itemModel.getItems({}, (err, objects) => {
        if (err) {
          return callback(err);
        }
        return callback(null, objects);
      });
    },
  };
}

module.exports = { configure };
