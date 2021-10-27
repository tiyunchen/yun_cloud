module.exports = {
  jwtSecret: 'chentiyun',
  jwtUnless: [
    {
      url: '/user/login', // methods: []， 过滤指定方法 https://github.com/jfromaniello/express-unless#examples
    },
    {
      url: '/user/register',
    },
  ],
};
