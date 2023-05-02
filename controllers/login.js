const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcrypt');


const User = require('../models/User');

//home/root
const home = async (req,res) => {
    res.render('login', {
        Title: "Login page",
        errors: "invalid username or password"
    });
}

//authentication
const isAuthenticated = async (req,res,next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        res.redirect("../");
    }
}
const checkNotAuthenticated = (req,res,next) => {
    if (req.isAuthenticated()) {
        return res.redirect("../profile");
    }
    next();
}
const profile = async (req, res) => {   
    res.render('profile', {
        Title: "Profile Page - Code Masters",
        Name: req.user.firstname + " " + req.user.lastname
        // page_title: "Library",
        // content: data
    });
}

//logout
const logout = (req, res, next) => {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('../');
    });;
};



//get one user
const login = async (req,res) => {
    try { 
        const username = await User.findByUsername(username);
        const password = await User.findByPassword(password);
        res.render("../profile", {
            username : username.toJSON(),
            password : password()
        });
    }
    catch (err) {
        res.status(404).render('Invalid username or password.');
    }
}
    

module.exports = {
    home,
    profile,
    isAuthenticated,
    checkNotAuthenticated,
    logout
};