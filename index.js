const express = require('express');
const winston = require('winston');

const app = express();
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  logger.info(`Application running on port ${app.get('port')}`);
});
