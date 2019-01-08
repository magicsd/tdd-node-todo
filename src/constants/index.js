const ENDPOINTS = {
  todo: '/todo',
  createTodo: '/todo/create',
};

const MESSAGES = {
  todo: {
    create : {
      success: 'Todo created successfully',
      fail: 'Todo was not found.',
    },
  },
};

module.exports = {
  ENDPOINTS,
  MESSAGES,
};
