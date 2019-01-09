const { HOST, PORT } = require('../../src/config');
const { ENDPOINTS } = require('../../src/constants');
const { generateTodo } = require('../../utils/generate');

describe('Get Todo', () => {
  let todo = {};
  let createdTodo = {};

  beforeEach(async () => {
    todo = generateTodo();
    const { body } = await cy.request(
      'POST', `${HOST}:${PORT}${ENDPOINTS.createTodo}`, todo);
    createdTodo = body;
  });

  it('Should display a single todo', async () => {
    cy.visit(`${HOST}:${PORT}${ENDPOINTS.todo}/${createdTodo.id}`);

    cy.contains(createdTodo.title);
    cy.contains(createdTodo.description);
  })
})
