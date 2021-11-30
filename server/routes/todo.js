const express = require('express');
const { body, param } = require('express-validator');
const validate = require('../middleware/validate');
const todoService = require('../service/todoService');
const { getLoginUser } = require('../utils/token');

const todoRouter = express.Router();

todoRouter.post('/create',
  body('title').exists(),
  validate,
  async (req, res) => {
    const payload = req.body;
    const user = await getLoginUser(req);
    payload.author = user._id;
    const data = await todoService.createTodo(req, res, payload);
    res.send({ result: true, data });
  });

module.exports = todoRouter;
