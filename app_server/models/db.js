const mongoose = require('mongoose');
//DB connection string definition
const dbURI = 'mongodb://localhost/known';
mongoose.connect(dbURI);
//Opening Mongoose connection at app startup
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${dbURI}`);
  });
mongoose.connection.on('error', err => {
    console.log('Mongoose connection error:', err);
  });
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });

//Capturing the process termination events
//Monitoring the Mongoose connection events 
//Adding three event listeners.
//Ans one function to close the db.
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        //message to console conf that connection is closed and reason
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};
//
//Here are two event listeners to call the above function when the app terminates or nodemon restarts.
//Nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
      process.kill(process.pid, 'SIGUSR2');
    });
  });
//For app termination
  process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
      process.exit(0);
    });
  });
//For Heroku app termination 
  process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
      process.exit(0);
    });
  });

  require('./projects');
