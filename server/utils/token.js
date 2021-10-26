const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config');

/**
 * 生成token
 * @param username
 * @param userId
 * @returns {Promise<unknown>}
 */
const generateToken = (username, userId) => new Promise((resolve, reject) => {
    const token = jwt.sign({username, userId}, jwtSecret, {expiresIn: '24h'});
    resolve(token);
});

const getToken = (token) => new Promise((resolve, reject) => {
    if (!token) {
        reject({error: 'token是空的'});
    } else {
        const info = jwt.verify(token.split(' ')[1], jwtSecret);
        console.log('token=', info);
        resolve(info);
    }
});

module.exports = {
    generateToken,
    getToken,
};
