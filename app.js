//Modified to ES6, var to const
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//Edited indexRouter and usersRotuer to just index and users, also edited the / and /users below. 
const index = require('./app_server/routes/index');
const users = require('./app_server/routes/users');

const app = express();

// view engine setup,
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'pug');

//These are middleware
//The req passes through each piece of these
//Passing each one which may or may not do something
//Arriving at the app logic itself which is????
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Is line 27 possibly the middleware that contains the app logic?
app.use('/', index);
app.use('/users', users);

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
