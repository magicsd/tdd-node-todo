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
    try {
      const todo = await Todo.findById(req.params.id);
      res.json(todo);
    } catch (e) {
      res.status(404).json({ message: MESSAGES.todo.create.fail });
    }
  });

  app.get(ENDPOINTS.createTodo, (req, res) => {
    
  });

};
