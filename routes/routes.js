const express = require('express');
const router = express.Router();
const passport = require('passport');
const loginController = require('../controllers/login.js');
const signupController = require('../controllers/signup.js');

const { validateSignupForm, validation } = require('../helpers/signup-validation.js');
const { editPage, updateProfile, profile, deleteProfile } = require('../controllers/profile.js');
const { validateProfileForm, validationProfile } = require('../helpers/edit-profile-validation.js');
const readController = require("../controllers/loggedInUser.js");//change the routes
const guestPage = require('../controllers/guestUser.js');
//const deleteController = require("../controllers/deletePost.js");


// Main and login page
router.get('/', loginController.checkNotAuthenticated, loginController.home);

// Signup page
router.get('/registration', loginController.checkNotAuthenticated, signupController.signupForm);

// Signup function
router.post('/signup', validateSignupForm, validation, signupController.signup);

// guest page. no auhtentication
router.get("/guest", guestPage);


router.get("/guest/:_id", loginController.isAuthenticated, readController.deletePost);
router.get("/guest/deleteById/:_id", loginController.isAuthenticated, readController.deletePostById);


router.get('/guest/edit/:_id', loginController.isAuthenticated, readController.editPost);
router.post('/guest/update/:_id', loginController.isAuthenticated, readController.updatePost);
router.post('/create-post', loginController.isAuthenticated, readController.createPost);


// loginauthentication with passport
router.post('/login', passport.authenticate('local', {
    successRedirect: '/AuthPage',
    failureRedirect: '/',
    faliureFlash: true,
}));

//router.get('/newpassword', loginController.newpassword);
router.get('/AuthPage', loginController.isAuthenticated, readController.AuthPage);

//router.get('/newpassword', loginController.newpassword);
router.get('/profile', loginController.isAuthenticated, profile);

// Logout function
router.get('/logout', loginController.logout);

// edit profile page
router.get('/edit-profile/:_id', loginController.isAuthenticated, editPage)

// Update function
router.post('/update-profile/:_id', loginController.isAuthenticated, validateProfileForm, validationProfile, updateProfile);

// delete profile function
router.post('/delete-profile/:_id', deleteProfile);


module.exports = router;