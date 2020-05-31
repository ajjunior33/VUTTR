const { Router } = require('express');

const tools = require('./tools.routes');
const users = require('./users.routes');
const auth = require('../middlewares/auth');

const route = Router();

route.get('/', (req, res) => {
  return res.json({ messager: 'Welcome to VUTTR' });
});

route.use('/users', users);
route.use('/tools', auth, tools);

module.exports = route;
