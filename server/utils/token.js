const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

/**
 * 生成token
 * @returns {Promise<unknown>}
 * @param user
 */
const generateToken = (user) => new Promise((resolve, reject) => {
  const token = jwt.sign(user, jwtSecret, { expiresIn: '24h' });
  resolve(token);
});


/**
 * 获取token
 * @param token
 * @returns {Promise<unknown>}
 */
const getToken = (token) => new Promise((resolve, reject) => {
  if (!token) {
    resolve({});
  } else {
    try {
      const info = jwt.verify(token.split(' ')[1], jwtSecret);
      // console.log('token=', info);
      resolve(info);
    } catch (err) {
      resolve({});
    }
  }
});

const getLoginUser = async (req) => {
  if (!req) throw Error('入参非法');
  const token = await getToken(req.headers.authorization);
  const user = await req.$models.User.model.findOne({ _id: token._id });
  return user;
};

module.exports = {
  generateToken,
  getToken,
  getLoginUser,
};
