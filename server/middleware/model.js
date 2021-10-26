const User = require('../models/user');

// 将所有的model注入到req上，方便读取
module.exports = (req, res, next) => {
  const user = new User();
  req.$models = {
    User: user,
  };
  next();
};
