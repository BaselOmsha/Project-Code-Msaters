const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.js');
const signupController = require('../controllers/signup.js');
const readController = require("../controllers/read.js");
const { validateSignupForm, validation, validation2, } = require('../helpers/signup-validation.js');
// const validate = require('../helpers/signup-validation.js');

router.get('/', loginController.home);

router.get('/registration', signupController.signupForm);

router.post('/signup', validateSignupForm, validation, signupController.signup);

router.get("/guest", readController.guestPage);

module.exports = router;