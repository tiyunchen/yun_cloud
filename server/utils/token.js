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

const getToken = (token) => new Promise((resolve, reject) => {
  if (!token) {
    reject({ error: 'token是空的' });
  } else {
    const info = jwt.verify(token.split(' ')[1], jwtSecret);
    // console.log('token=', info);
    resolve(info);
  }
});

module.exports = {
  generateToken,
  getToken,
};
