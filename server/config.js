module.exports = {
  jwtSecret: 'chentiyun',
  jwtUnless: [
    {
      url: '/user/login', // methods: []， 过滤指定方法
    },
    {
      url: '/user/register',
    },
  ],
};
