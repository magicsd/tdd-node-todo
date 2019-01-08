const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { MONGODB_URI, PORT } = require('./config');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

if (!module.parent) {
  app.listen(PORT);
}

module.exports = {
  app
};
