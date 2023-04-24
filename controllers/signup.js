const express = require('express');

const User = require('../models/User');


// Signupform
const signupForm = async (req,res) => {
    // res.send('My MVC App');
    res.render('createAccount', {
        
    });
}

// Signup finction
const signup = async (req,res) => {

}

module.exports = {
    signupForm,
    signup
};