const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

//Configuiring a local strategy.
//Setting a Passport strategy with the use method.
passport.use(new LocalStrategy({
    //Overiding the username field with email.
    usernameField: 'email'
    },
    (username, password, done) => {
      //This is a Mongoose call to find users with the 2 items supplied in the function.
        User.findOne({ email: username }, (err, user) => {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, {
                message: 'Incorrect username.'
              });
            }
            if (!user.validPassword(password)) {
              return done(null, false, {
                message: 'Incorrect password.'
              });
            }
            return done(null, user);
          });
    }
 ));

