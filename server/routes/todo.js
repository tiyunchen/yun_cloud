const express = require('express');
const { body, param } = require('express-validator');
const validate = require('../middleware/validate');
const todoService = require('../service/todoService');
const { getLoginUser } = require('../utils/token');

const todoRouter = express.Router();

// 创建 待办事项
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

// 更新待办
todoRouter.put('/update',
  body('title').exists(),
  body('_id').exists(),
  body('author').isObject().withMessage('需要对象'),
  validate,
  async (req, res) => {
    const payload = req.body;
    if (req.user._id !== payload.author._id) {
      res.status(500).send({ result: false, msg: '无权限' });
      return;
    }
    delete payload.author;
    const data = await req.$models.Todo.findOneAndUpdate(
      { _id: payload._id },
      payload,
    );

    res.send({ result: true, data });
  });

// 查询待办数据
todoRouter.get('/user_list', async (req, res) => {
  const payload = req.query;
  // const user = await getLoginUser(req);
  const filter = {};

  // 查询数据库数据
  if (payload.query) filter.title = { $in: payload.query };
  if (req.user) filter.author = req.user._id;
  const dataList = await req.$models.Todo.model.find({
    ...filter,
  })
    .populate('author', 'username email');

  res.send({ result: true, data: dataList });
});

module.exports = todoRouter;
