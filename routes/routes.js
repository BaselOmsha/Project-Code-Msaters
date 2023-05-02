const express = require('express');
const router = express.Router();
const passport = require('passport');
const loginController = require('../controllers/login-logout.js');
const signupController = require('../controllers/signup.js');
const readController = require("../controllers/read.js");
const { validateSignupForm, validation } = require('../helpers/signup-validation.js');

// Main and login page
router.get('/', loginController.checkNotAuthenticated, loginController.home);

// profile page landing after login
router.get('/profile', loginController.isAuthenticated, loginController.profile);

// loginauthentication with passport
router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/',
    failureFlash: true,
}), (req, res) => {
    console.log('the request: ' + req.user); // Add this line
});

// Logout function
router.post('/logout', loginController.logout);

// Signup page
router.get('/registration', loginController.checkNotAuthenticated, signupController.signupForm);

// Signup function
router.post('/signup', validateSignupForm, validation, signupController.signup);

// no authentication
router.get("/guest", readController.guestPage);

module.exports = router;