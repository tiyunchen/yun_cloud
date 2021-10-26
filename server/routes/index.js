const express = require('express');

const router = express.Router();
const user = require('./user');
const yt = require('./yt');

router.use('/user', user);
router.use('/yt', yt);
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {title: 'Express'});
});

module.exports = router;
