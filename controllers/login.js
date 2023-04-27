const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');


const User = require('../models/User');

//home/root
const loginForm = async (req,res) => {
    res.render('login', {
        
    });
}

//password hashing and salting
const encrypt = async (password, salt) => {
    try {
        const hashedPassword = await bcrypt.hash(password, salt);
        return hashedPassword;
    }
    catch (error) {
        console.log("Error with password hashing" + error);
    }
}

//get one user
const login = async (req,res) => {
    try { 
        const username = await User.findByUsername(username);
        const password = await User.findByhashedPassword(hashedPassword);
        res.render('index', {
            username : username.toJSON(),
            hashedPassword : hashedPassword.toJSON()
        });
    }
    catch (err) {
        res.status(404).render('Invalid username or password.');
    }
}
    

module.exports = {
    encrypt,
    loginForm,
    login
};