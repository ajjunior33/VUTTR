const { Router } = require('express');

const { celebrate, Segments, Joi } = require('celebrate');

const tools = Router();
const ToolsController = require('../controllers/ToolsController');

tools.get(
  '/',
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      tag: Joi.string(),
    }),
  }),
  ToolsController.index,
);
tools.post(
  '/',

  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      link: Joi.string().required(),
      description: Joi.string().required(),
      tags: Joi.array().required(),
    }),
  }),
  ToolsController.store,
);
tools.delete(
  '/:id',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string().required(),
    }),
  }),
  ToolsController.destroy,
);

module.exports = tools;
