let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const expressJwt = require('express-jwt')

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/user');
let ytRouter = require('./routes/yt');
let db = require('./utils/db')
const config = require('./config')

db.connect()

let app = express();
// console.log('d2b', d2b)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// token 验证

app.use(expressJwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
}).unless({
  path: config.jwtUnless
}))
// app.use(loginVerify)

app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/yt', ytRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
