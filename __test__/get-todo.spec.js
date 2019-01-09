const server = require('../utils/setup');
const { ENDPOINTS, MESSAGES } = require('../src/constants');
const { generateTodo } = require('../utils/generate');
const Todo = require('../src/database/models/Todo');

const getEndpoint = (id) => `${ENDPOINTS.todo}/${id}`

describe('Get Single Todo', () => {
  let todo;

  beforeEach(() => {
    todo = generateTodo();
  })

  test('Should get single todo', async () => {
    const createdTodo = await Todo.create(todo);

    const { status, text } = await server.get(getEndpoint(createdTodo.id));

    expect(status).toBe(200);
    expect(text).toMatch(todo.title);
    expect(text).toMatch(todo.description);

  });

  test('Should get error message if todo was not found', async () => {
    const { status, body } = await server.get(getEndpoint('123'));

    expect(status).toBe(404);
    expect(body.message).toBe(MESSAGES.todo.create.fail);
  });
});
