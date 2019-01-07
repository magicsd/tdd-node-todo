const ENDPOINTS = {
  todo: '/todos',
};

const MESSAGES = {
  todo: {
    create : {
      success: 'Todo created successfully',
    },
  },
};

const MONGODB_URL = 'mongodb://localhost/';

module.exports = {
  ENDPOINTS,
  MESSAGES,
  MONGODB_URL,
};
