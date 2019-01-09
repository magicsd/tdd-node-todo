const { ENDPOINTS, MESSAGES } = require('../constants');
const Todo = require('../database/models/Todo');

module.exports = (app) => {
  app.post(ENDPOINTS.todo, async (req, res) => {
    const todo = await Todo.create(req.body);

    res.redirect(`${ENDPOINTS.todo}/${todo.id}`);
  });

  app.get(`${ENDPOINTS.todo}/:id`, async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      res.render('show', { todo });
    } catch (e) {
      res.status(404).json({ message: MESSAGES.todo.create.fail });
    }
  });

  app.get(ENDPOINTS.createTodo, (req, res) => {
    res.render('create');
  });

  app.post(ENDPOINTS.createTodo, async (req, res) => {
    const todo = await Todo.create(req.body);

    res.json(todo);
  });
};
