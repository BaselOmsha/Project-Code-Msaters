const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.js');
const signupController = require('../controllers/signup.js');

router.get('/', loginController.home);

router.get('/registration', signupController.signupForm);

router.post('/signup', signupController.signup);

module.exports = router;