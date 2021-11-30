const User = require('../models/user');
const Todo = require('../models/todo');

// 将所有的model注入到req上，方便读取
module.exports = (req, res, next) => {
  const user = new User();
  const todo = new Todo();
  req.$models = {
    User: user,
    Todo: todo,
  };
  next();
};
