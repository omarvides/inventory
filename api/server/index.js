require('dotenv').config();
const express = require('express');
const logger = require('./logger');
const itemController = require('../controllers/itemController');
const itemRoutes = require('../routes/itemRoutes');

const app = express();
itemRoutes(app, itemController);
app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), () => {
  logger.info(`Application running on port ${app.get('port')}7`);
});
