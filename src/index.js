const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { ENDPOINTS, MESSAGES, MONGODB_URL } = require('./constants/');
const Todo = require('./database/models/Todo');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(MONGODB_URL);

app.post(ENDPOINTS.todo, async (req, res) => {
  await Todo.create(req.body);

  res.json({
    message: MESSAGES.todo.create.success,
  });
});

if (!module.parent) {
  app.listen(3000);
}

module.exports = {
  app
};
