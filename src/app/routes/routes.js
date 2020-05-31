const { Router } = require('express');

const tools = require('./tools.routes');
const users = require('./users.routes');

const route = Router();

route.get('/', (req, res) => {
  return res.json({ messager: 'Welcome to VUTTR' });
});

route.use('/users', users);
route.use('/tools', tools);

module.exports = route;
