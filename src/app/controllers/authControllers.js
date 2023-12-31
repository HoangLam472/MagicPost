const User = require("../models/user");
const passport = require('passport');
const util = require('util');
const bcrypt = require('bcrypt');

const LocalStrategy = require('passport-local').Strategy;

const comparePasswords = async (plainPassword, hashedPassword) => {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

// Configure Passport local strategy
passport.use(new LocalStrategy({
  usernameField: 'userName',  // Assuming the username field is 'userName'
  passwordField: 'password',  // Assuming the password field is 'password'
}, async (userName, password, done) => {
  try {
    // Find user in the database based on the username
    const user = await User.findOne({ userName });

    // Check if user exists
    if (!user) {
      return done(null, false, { message: 'User not found' });
    }

    // Check if the password is correct
    const isMatch = await user.comparePasswords(password);

    if (isMatch) {
      // Password is correct, return the user
      return done(null, user);
    } else {
      // Password is incorrect
      return done(null, false, { message: 'Incorrect password' });
    }
  } catch (error) {
    return done(error);
  }
}));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Login controller
exports.login = async (req, res, next) => {
  try {
    const authFunction = util.promisify(passport.authenticate('local', { session: false }));

    const user = await authFunction(req, res);

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.logIn(user, async (err) => {
      if (err) {
        return next(err);
      }

      // Check user role and redirect accordingly
      if (user.role === 'admin') {
        return res.redirect('/admin-dashboard');
      } else if (user.role === 'gathering point leader') {
        return res.redirect('/gathering-point-leader-dashboard');
      } else if (user.role === 'head of transaction point') {
        return res.redirect('/head-of-transaction-point-dashboard');
      } else if (user.role === 'assembly point staff') {
        return res.redirect('/assembly-point-staff-dashboard');
      } else if (user.role === 'transaction point staff') {
        return res.redirect('/transaction-point-staff-dashboard');
      } else {
        return res.status(403).json({ message: 'Unauthorized access' });
      }
    });
  } catch (error) {
    return next(error);
  }
};
