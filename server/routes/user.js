const express = require('express');

const userRouter = express.Router();

/* GET users listing. */
userRouter.get('/', (req, res, next) => {
  res.send({result: true});
});

/**
 * 登入
 */
userRouter.post('/login', (req, res) => {
  // console.log('rrrrrr', req)
  res.send('helo');
});

/**
 * 注册
 */
userRouter.put('/register', (req, res) => {
  console.log('registerregister', req.$models);
  req.$models.User.update();
  res.send('register');
});

module.exports = userRouter;
