const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressJwt = require('express-jwt');

const routers = require('./routes/index');
const db = require('./utils/db');
const config = require('./config');
const model = require('./middleware/model');
const errorStatus = require('./middleware/responseStatus');

db.connect();

const app = express();
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

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(model);

app.use(expressJwt({
  secret: config.jwtSecret,
  algorithms: ['HS256'],
}).unless({
  path: config.jwtUnless,
}));

app.use(errorStatus());

app.use('/', routers);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
