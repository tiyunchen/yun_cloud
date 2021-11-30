const { generateToken } = require('../utils/token');

const checkNameExit = async (req, username) => req.$models.User.model.findOne({ username });

/**
 * 设置新的token的同时需要存入数据库
 * @param req
 * @param res
 * @param user
 * @returns {Promise<void>}
 */
const setToken = async (req, res, user) => {
  const userID = user.toObject()._id;
  const token = await generateToken({ _id: userID });
  await req.$models.User.model.findOneAndUpdate({ _id: userID }, { token });
  console.log('token', token);
  res.append('authorization', `Bearer ${token}`);
};

module.exports = {
  checkNameExit,
  setToken,
};
