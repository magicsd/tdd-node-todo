const { ENDPOINTS, MESSAGES } = require('../constants');
const Todo = require('../database/models/Todo');

module.exports = (app) => {
  app.post(ENDPOINTS.todo, async (req, res) => {
    await Todo.create(req.body);

    res.json({
      message: MESSAGES.todo.create.success,
    });
  });
};