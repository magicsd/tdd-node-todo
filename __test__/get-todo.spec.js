const server = require('../utils/setup');
const { ENDPOINTS, MESSAGES } = require('../src/constants');
const { generateTodo } = require('../utils/generate');
const Todo = require('../src/database/models/Todo');

describe('Get Single Todo', () => {
  test('Should get single todo', async () => {
    const todo = generateTodo();

    const createdTodo = await Todo.create(todo);

    const { status, body } = await server.get(`${ENDPOINTS.todo}/${createdTodo.id}`);

    console.log('BODY', body);

    expect(status).toBe(200);
    expect(body).toEqual({
      ...todo,
      id: expect.any(String),
    });

  });
});
