const app = require('express')();
const consing = require('consign');
const mongoose = require('mongoose');
const db = require('./config/db');

require('./config/mongodb')

app.db = db;
app.mongoose = mongoose;

consing()
  .include('./config/passport.js')
  .then('./config/middlewares.js')
  .then('./api/validation.js')
  .then('./api')
  .then('./schedule')
  .then('./config/routes.js')
  .into(app)

app
  .listen(3000, () => {
    console.log('Server is running.')
  })