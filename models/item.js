const mongoose = require('mongoose');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
const database = process.env.DB_DATABASE;
const connectionString = `mongodb://${user}:${password}@${host}:${port}`;

function connect() {
  console.log(connectionString);
  mongoose.connect(connectionString).then(
    () => {
      console.log('Connected');
    },
    (err) => {
      console.log(`An error ${err}`);
    },
  );
}


module.exports = { connect };
