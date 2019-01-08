const { ENDPOINTS, MESSAGES } = require('../constants');
const Todo = require('../database/models/Todo');

module.exports = (app) => {
  app.post(ENDPOINTS.todo, async (req, res) => {
    await Todo.create(req.body);

    res.json({
      message: MESSAGES.todo.create.success,
    });
  });

  app.get(`${ENDPOINTS.todo}/:id`, async (req, res) => {
    const todo = await Todo.findById(req.params.id);

    res.json({
      title: todo.title,
      description: todo.description,
      isCompleted: todo.isCompleted,
      id: todo.id,
    });
  })
};
