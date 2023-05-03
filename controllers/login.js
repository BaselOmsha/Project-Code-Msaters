const { getDay, getMonth, getYear } = require('../helpers/date-values');


//const User = require('../models/User');

//home/root
const home = async (req, res) => {
    res.render('logIn', {
        Title: "Login Page - Code Masters",
        // errors: "Invalid username or password",
        messages: req.flash('error'),
        // page_title: "Library",
        // content: data
    });
}

// landing page after login
const profile = async (req, res) => {
    res.render('profile', {
        Title: req.user.firstname + " " + req.user.lastname + " - Code Masters",
        _id: req.user._id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        dob: req.user.dob,
        day: getDay(req.user.dob),
        month2: getMonth(req.user.dob),
        year: getYear(req.user.dob),
        gender: req.user.gender,
        description: req.user.description,
        hobbies: req.user.hobbies
    });
}

// If user not authenticated take back to login page
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect("../");
    }
}

// If user authenticated keep on logged
const checkNotAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("../profile");
    }
    next();
}

const logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('../');
    });;
};
/*
//new password
const newpassword = (req,res, next) => {
    if (req.newpassword()) {
        return res.redirect("../newpassword");
    }
    else {
        res.redirect("../");
    }
};
*/
module.exports = {
    home,
    profile,
    isAuthenticated,
    checkNotAuthenticated,
    logout
    //newpassword
};