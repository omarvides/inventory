require('dotenv').config();
const express = require('express');
const logger = require('./logger');
const itemController = require('../controllers/item');

const app = express();

app.set('port', process.env.PORT || 3000);

app.get('/create', (req, res) => {
  itemController.createItem((err) => {
    if (err) {
      res.statusCode = 500;
      return res.send(`An error ocurred while creating the item ${err}`);
    }
    return res.send('item created');
  });
});

app.get('/list', (req, res) => {
  itemController.getItems((err, items) => {
    logger.error(err);
    if (err) {
      res.statusCode = 500;
      return res.send(`An error ocurred while querying the item ${err}`);
    }
    return res.json(items);
  });
});

app.listen(app.get('port'), () => {
  logger.info(`Application running on port ${app.get('port')}`);
});
