const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');


//const User = require('../models/User');

//home/root
const home = async (req, res) => {
    res.render('logIn', {
        Title: "Login Page - Code Masters",
        errors: "Invalid username or password",
        // page_title: "Library",
        // content: data
    });
}

// landing page after login
const profile = async (req, res) => {
    res.render('profile', {
        Title: "Profile Page - Code Masters",
        Name: req.user.firstname + " " + req.user.lastname
        // page_title: "Library",
        // content: data
    });
}

//authentication
const isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    } 
    else {
        res.redirect("../");
    }
}
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