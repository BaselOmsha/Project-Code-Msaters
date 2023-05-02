/*
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

const username = 'username';
const password = 'password';

const validateLoginForm = [
    body(username)
        .trim()
        .notEmpty()
        .withMessage(`Username is invalid`),

    body(password)
    .trim()
    .notEmpty()
    .withMessage(`Password is invalid`)
];

const validation = async (req, res, next) => {
    const validationList = validationResult(req).array();
    if (!validationList.length) {
        return next();
    }

    const errors = {};

    validationList.forEach((error) => {
        const field = error.path;
        const message = error.message;
        if (message === 'Password is invalid') {
            errors['password'] = message;
        }
        else {
            errors[field] = message;
        }
    });

    console.log(errors);
    const { username, password } = req.body;
    const values = { username, password };

    res.render('login', {errors, values});
};

module.exports = {
    validateLoginForm,
    validation
};
*/