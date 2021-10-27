const express = require('express');
const {body, param} = require('express-validator');
const userService = require('../service/service');
const validate = require('../middleware/validate');
const {getToken} = require('../utils/token');

const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', (req, res, next) => {
  res.send({result: true});
});

/**
 * 登入
 */
userRouter.post('/login',
  body('username').exists(),
  body('password').exists(),
  validate,
  async (req, res) => {
    const data = await req.$models.User.model.findOne(req.body);
    if (!data) {
      res.send({result: false, msg: '用户名或密码不一致'});
    } else {
      delete data.password;
      await userService.setToken(req, res, data);
      res.send({result: true, data});
    }
  });

/**
 * token 刷新
 */
userRouter.post('/refresh_token', async (req, res) => {
  const token = await getToken(req.headers.authorization);
  const user = await req.$models.User.model.findOne({_id: token._id});
  // 如果token 和数据库存储的token不一致用户需要从新登入，这样可以手动提用户下线，或者只能维持单点登入
  if (user.token !== token) {
    return res.status(401).send({msg: '登入失效'});
  }
  console.log('token', token, token._id);
  await userService.setToken(req, res, user);
  res.send({result: true});
});

/**
 * 注册
 */
userRouter.put('/register',
  body('username').exists(),
  body('password').exists(),
  body('email').isEmail(),
  validate,
  async (req, res) => {
    const usernameRepeat = await userService.checkNameExit(req, req.body.username);
    if (usernameRepeat) return res.status(500).send({msg: '用户名已存在'});
    const data = await req.$models.User.create(req.body);
    console.log('注册成功', data);
    res.send({result: true, data});
  });

/**
 * 检查是否名字存在
 */
userRouter.get('/check_name_exist', param('username'), validate, async (req, res) => {
  const usernameRepeat = await userService.checkNameExit(req, req.body.username);
  if (usernameRepeat) return res.send({msg: '用户名已存在', result: false});
  res.send({result: true});
});

module.exports = userRouter;
