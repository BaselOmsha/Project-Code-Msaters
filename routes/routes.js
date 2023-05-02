const express = require('express');
const router = express.Router();
const passport = require('passport')
const loginController = require('../controllers/login.js');
//const { validateLoginForm, validation } = require('../controllers/login-validation.js');


router.get('/', loginController.checkNotAuthenticated, loginController.home);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/',
    faliureFlash: true,
}), (req, res) => {
    console.log('the request: ' + req.user);
});

router.get('/profile', loginController.isAuthenticated, loginController.profile);

router.post('/logout', loginController.logout);


module.exports =  router;