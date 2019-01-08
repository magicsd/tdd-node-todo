const { Schema, model } = require('mongoose');
const toJson = require('@meanie/mongoose-to-json');

const TodoSchema = new Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

TodoSchema.plugin(toJson);

module.exports = model('Todo', TodoSchema);
