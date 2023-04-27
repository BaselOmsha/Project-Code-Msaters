const User = require('../models/User');
const encrypt = require("../helpers/paswdEncryption.js");
const { body, validationResult } = require('express-validator');

const firstname = 'firstname';
const lastname = 'lastname';
const month = 'month';
const day = 'day';
const year = 'year';

const validateSignupForm =
    [
        body(firstname)
            .trim()
            .notEmpty()
            .withMessage(`${firstname} is empty`)
            .isLength({ min: 2 })
            .withMessage('firstname is too short')
            .escape(), //  To prevent Cross-Site Scripting vulnerability (XSS).

        body(lastname)
            .trim()
            .notEmpty()
            .withMessage(`${lastname} is empty`)
            .isLength({ min: 2 })
            .withMessage('lastname is too short')
            .escape(),

        body(month)
            .trim()
            .notEmpty()
            .withMessage(`${month} is empty`)
            .escape(),

        body(day)
            .trim()
            .notEmpty()
            .withMessage(`${day} is empty`)
            .escape(),

        body(year)
            .trim()
            .notEmpty()
            .withMessage(`${year} is empty`)
            .escape(),

        body('email')
            .trim()
            .notEmpty()
            .withMessage('E-mail field is empty')
            .isLength({ min: 1 })
            .withMessage('Email is too short')
            .normalizeEmail()
            .isEmail()
            .withMessage('Invalid email format')
            .custom(async (email) => {
                const user = await User.find({ email: email });
                if (user.length > 0) {
                    throw new Error('E-mail already in use');
                }
                return true;
            })
            .withMessage('E-mail already in use')
            .escape(),

        body('password')
            .trim()
            .notEmpty()
            .withMessage('Password field is empty')
            .isLength({ min: 8 })
            .withMessage('Password is too short. Minimum 8 charachters long')
            .isStrongPassword({
                minUppercase: 1,
                minLowercase: 1,
                minSymbols: 1
            })
            .withMessage('Missing an uppercase, lowercase or a special charachter')
            .escape(),

        body('paswdConfirm')
            .trim()
            .notEmpty()
            .withMessage('Confirmed password field is empty')
            .custom(async (value, { req }) => {
                if (value !== await req.body.password) {
                    throw new Error('Passowrds do not match');
                }
                return true
            })

    ];

const validation = async (req, res, next) => {
    const result = validationResult(req).array();

    if (!result.length) {
        return next();
    }

    const errors = {};

    result.forEach((error) => {
        const field = error.path;
        const message = error.msg;
        if (message === 'Passwords do not match') {
            errors['passwords'] = message;
        } else {
            errors[field] = message;
        }
    });

    console.log(errors);
    const { firstname, lastname, email, password, confirmPassword, birthMonth, birthDay, birthYear, gender } = req.body;
    const values = { firstname, lastname, email, password, confirmPassword, birthMonth, birthDay, birthYear, gender };

    res.render('createAccount', { errors, values });
};

module.exports = {
    validateSignupForm,
    validation
};
