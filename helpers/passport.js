const express = require('express');
const User = require('../models/User');
var passport = require('passport');
var LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const paswdutils = require("../helpers/passowrdUtils.js");
const ObjectId = require('mongodb').ObjectId;

const customeFields = {
    usernameField: 'email',
    passwordField: 'password'
};

const verifyCallback = async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        console.log('User: ' + user);
        if (!user) {
            return done(null, false, { message: 'Incorrect email or password.' })
        }
        const isMatch = paswdutils.validatePassword(user.password, password);
        if (isMatch) {
            console.log('validation worked');
            // console.log(user);
            return done(null, user);
        } else {
            return done(null, false, { message: 'Incorrect email or password.' });
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

// passport.deserializeUser((id, done) => {
//     User.findOne({_id: id}, (err, user) => {
//       done(err, user);
//     });
//   });


passport.deserializeUser(function (userId, done) {
    // console.log('userId: ' + userId);
    // console.log('StringuserId: ' + userId.toString());
    // const o_id = new ObjectId(userId.toString());
    const objetcId = "ObjectId(" + userId + ")"
    // console.log('objetcId: ' + userId.toString());
    console.log('objetcId: ' + objetcId);
    User.findOne({ _id: objetcId })
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