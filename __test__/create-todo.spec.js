const faker = require('faker');
const supertest = require('supertest');
const app = require('../src/');
const server = supertest(app);
const Todo = require('../src/database/models/Todo');

const ENDPOINTS = {
  todo: '/todo',
};

const MESSAGES = {
  todo: {
    create : {
      success: 'Todo created successfully',
    },
  },
};

const generateTodo = () => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.sentences(3),
  isCompleted: false,
});

describe('ToDo Creation Process', () => {
  test('Should create a todo', async () => {

    const todo = generateTodo();

    const { status, body } = await server.post(ENDPOINTS.todo).send(todo);

    expect(status).toBe(200);
    expect(body.message).toBe(MESSAGES.todo.create.success)

    const todoFromDatabase = await Todo.find({ title: todo.title });
    expect(todoFromDatabase.title).toBe(todo.title);
    expect(todoFromDatabase.description).toBe(todo.description);
  });
});
