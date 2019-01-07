const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

module.exports = mongoose.model('Todo', TodoSchema);
