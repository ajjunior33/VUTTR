const { Router } = require('express');

const tools = Router();
const ToolsController = require('../controllers/ToolsController');

tools.get('/', ToolsController.index);
tools.post('/', ToolsController.store);
tools.delete('/:id', ToolsController.destroy);

module.exports = tools;
