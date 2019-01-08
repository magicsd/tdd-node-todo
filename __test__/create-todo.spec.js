const Todo = require('../src/database/models/Todo');
const { ENDPOINTS, MESSAGES } = require('../src/constants');
const server = require('../utils/setup');
const { generateTodo } = require('../utils/generate');

describe('ToDo Creation Process', () => {
  test('Should create a todo', async () => {

    const todo = generateTodo();

    const { status, body } = await server.post(ENDPOINTS.todo).send(todo);

    expect(status).toBe(200);
    expect(body.message).toBe(MESSAGES.todo.create.success)

    const todoFromDatabase = await Todo.find({ title: todo.title });

    expect(todoFromDatabase[0].title).toBe(todo.title);
    expect(todoFromDatabase[0].description).toBe(todo.description);
  });
});
