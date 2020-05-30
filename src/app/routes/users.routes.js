const { Router } = require('express');

const users = Router();

const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

users.post('/auth', AuthController.auth);

users.post('/register', UserController.store);

module.exports = users;
