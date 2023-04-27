const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.js');
const { validateLoginForm, validation } = require('../controllers/login-validation.js');


router.get('/', loginController.loginForm);
router.post('/', validateLoginForm, validation, loginController.login);


module.exports =  router;