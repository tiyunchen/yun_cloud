const express = require('express');

const router = express.Router();
const user = require('./user');
const yt = require('./yt');
const todo = require('./todo');

router.use('/user', user);
router.use('/yt', yt);
router.use('/todo', todo);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// 路由无匹配处理
router.post('*', (req, res) => {
  res.status(404).send({});
});
router.get('*', (req, res) => {
  res.status(404).send({});
});
router.put('*', (req, res) => {
  res.status(404).send({});
});
router.delete('*', (req, res) => {
  res.status(404).send({});
});

module.exports = router;
