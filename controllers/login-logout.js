require('../helpers/passport');
require('dotenv').config();

//home/root
const home = async (req, res) => {
    // res.send('My MVC App');
    res.render('logIn', {
        Title: "Login Page - Code Masters",
        errors: "Invalid email or password",
        // page_title: "Library",
        // content: data
    });
}

// landing page after login
const profile = async (req, res) => {
    // res.send('My MVC App');
    res.render('profile', {
        Title: "Profile Page - Code Masters",
        Name: req.user.firstname + " " + req.user.lastname
        // page_title: "Library",
        // content: data
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

module.exports = {
    home,
    profile,
    isAuthenticated,
    checkNotAuthenticated,
    logout
};