const faker = require('faker');

const generateTodo = () => ({
  title: faker.lorem.sentence(),
  description: faker.lorem.sentences(3),
  isCompleted: false,
});

module.exports = {
  generateTodo,
};
