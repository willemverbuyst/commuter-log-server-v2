const express = require('express');

const logsRouter = require('./logs');
const usersRouter = require('./users');

module.exports = (dependencies) => {
  const routes = express.Router();
  const logs = logsRouter(dependencies);
  const users = usersRouter(dependencies);

  routes.use('/logs', logs);
  routes.use('/users', users);

  return routes;
};
