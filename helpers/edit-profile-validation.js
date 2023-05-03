const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const { calcAge } = require('./ageValidation.js');

const firstname = 'firstname';
const lastname = 'lastname';
const month = 'month';
const day = 'day';
const year = 'year';

const validateProfileForm =
    [
        body(firstname)
            .trim()
            .notEmpty()
            .withMessage(`${firstname} is empty`)
            .isLength({ min: 2 })
            .withMessage('The first name is too short')
            .escape(), //  To prevent Cross-Site Scripting vulnerability (XSS).

        body(lastname)
            .trim()
            .notEmpty()
            .withMessage(`${lastname} is empty`)
            .isLength({ min: 2 })
            .withMessage('The last name is too short')
            .escape(),

        body(month)
            .trim()
            .notEmpty()
            .withMessage(`${month} is empty,`)
            .escape(),

        body(day)
            .trim()
            .notEmpty()
            .withMessage(`${day} is empty,`)
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
                // const id = req.body._id
                // console.log("tesssssssssssst!!!!: " + id);
                const user = await User.find({ email: email }, {email:1, _id:1});
                console.log("tesssssssssssst!!!!: " + user._id +user.email);
                if (user.length > 0 && !user._id) {
                    throw new Error('E-mail is already in use!');
                } else if(user.length > 0 && user._id) {
                    console.log("good email");
                    return true;
                }
                return true;
            })
            // .withMessage('E-mail is already in use')
            .escape(),
    ];


const validationProfile = async (req, res, next) => {
    const result = validationResult(req).array();
    if (!result.length) {
        return next();
    }
    const errors = {};
    result.forEach((error) => {
        const field = error.path;
        const message = error.msg;
        errors[field] = message;
    });
    console.log(errors);
    const { _id, firstname, lastname, email, password, paswdConfirm, month, day, year, gender } = req.body;
    const agevarify = await calcAge(month, day, year) // validate age
    const values = { _id, firstname, lastname, email, password, paswdConfirm, month, day, year, gender };
    res.render('edit-profile', { errors, values, agevarify });
};

module.exports = {
    validateProfileForm,
    validationProfile
};
