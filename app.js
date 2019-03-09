require('dotenv').load();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
require('./app_api/models/db');
require('./app_api/config/passport');


//Edited indexRouter and usersRotuer to just index and users, also edited the / and /users below. 

const apiRoutes = require('./app_api/routes/index');

const app = express();

// view engine setup, specify the path to the view folder thus.
app.set('views', path.join(__dirname, 'app_server','views'));
app.set('view engine', 'pug');

//These are middleware
//The req passes through each piece of these
//Passing each one which may or may not do something
//Arriving at the app logic itself.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//Adding line to use the app_public/build folder.
app.use(express.static(path.join(__dirname, 'app_public', 'build')));
app.use(passport.initialize());

//Allowing CORS req in Express 
app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
 });

 //Error handlers to catch unauthorized errors.
 app.use((err, req, res, next) => {
   if (err.name === 'UnauthorizedError') {
     res 
        .status(401)
        .json({"message" : err.name + ": " + err.message});
   }
 });



//Here are the routes the app needs 
//Using the / paramter defines when it should use them
//For instance, we tell the app to use the API routes only when the route starts with /api
app.use('/api', apiRoutes);
app.get(/(\/dashboard)|(\/project\/[a-z0-9]{24})/, function(req, res, next) {
  res.sendFile(path.join(__dirname, 'app-public', 'build', 'index.html'));
});

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
