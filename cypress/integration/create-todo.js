const { HOST, PORT } = require('../../src/config');
const { ENDPOINTS } = require('../../src/constants');
const { generateTodo } = require('../../utils/generate');

describe('Todo Creation Process', () => {
  const homePage = `${HOST}:${PORT}`;

  it('Should create a todo', () => {
    cy.visit(`${homePage}${ENDPOINTS.createTodo}`);
  });

  it.only('Should create todo when form is submitted', () => {
    const todo = generateTodo();

    cy.visit(`${homePage}${ENDPOINTS.createTodo}`);
    cy.get('#todoTitle').type(todo.title);
    cy.get('#todoDescription').type(todo.description);
    cy.get('#todoCreate').should('have.text', 'Create');
    cy.get('#todoCreate').click();

    cy.url().should('not.contain', ENDPOINTS.createTodo);
    cy.contains(todo.title);
    cy.contains(todo.description);
  });
});
