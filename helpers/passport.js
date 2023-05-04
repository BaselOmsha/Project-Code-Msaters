const User = require('../models/User');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');

const customeFields = {
    usernameField: 'email',
    passwordField: 'password'
};

const verifyCallback = async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        console.log('User: ' + user);
        if (!user) {
            return done(null, false, { message: 'Incorrect email or password. Check your credentials and try again!' })
        }
        const verify = await bcrypt.compare(password, user.password)
        console.log("Passwords match: " + verify);
        if (verify) {
            console.log('validation worked');
            // console.log(user);
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect email or password. Check your credentials and try again!' });
        }
    } catch (error) {
        return done(error)
    }
}

const strategy = new LocalStrategy(customeFields, verifyCallback);
passport.use(strategy);

passport.serializeUser(function (user, done) {
    console.log('serializeUser: ' + user.id);
    done(null, user.id.toString());
});

passport.deserializeUser(function (userId, done) {
    User.findOne({ _id: userId })
        .then((user) => {
            console.log('deserializeUser: ' + user);
            if (!user) {
                console.log('deserializeUser not found: ' + user);
                // return done(new Error('User not found'));
            }
            done(null, user);
        })
        .catch(err => done(err));
});