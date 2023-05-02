require('../helpers/passport');
require('dotenv').config();

//home/root
const home = async (req, res) => {
    // res.send('My MVC App');
    res.render('logIn', {
        Title: "Login Page - Code Masters",
        messages: req.flash('error'),
    });
}

// landing page after login
const profile = async (req, res) => {
    const dob = req.user.dob; // String
    console.log(dob);
    const parts = dob.split('.'); // Split the date string into day, month, and year parts
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const date = new Date(`${month}.${day}.${year}`); // Reformat the date string to a format recognized by the Date constructor
    console.log('date: ' + date);
    const month2 = date.toLocaleString('en-US', { month: 'short' }); // Convert the month number to a short month name 
    console.log(month2);
    // res.send('My MVC App');
    res.render('profile', {
        Title: req.user.firstname + " " + req.user.lastname + " - Code Masters",
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        dob: req.user.dob,
        day,
        month2,
        year,
        gender: req.user.gender
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