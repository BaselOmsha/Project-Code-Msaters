const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const router = express.Router();
//const bcrypt = require('bcryptjs');
//const crypto = require('crypto');

const User = require('../models/User');

//home/root
const home = async (req,res) => {
    res.render('logIn', {
        // page_title: "Library",
        // content: data
    });
}


//get one user
const getUser = async (req,res) => {
    try {
        const email = req.params.email;
        const username = await User.findByEmail(email);
        console.log(username);
        res.render('index', {
            username : username.toJSON()
        });
    }
    catch (err) {
        res.status(404).render('Invalid username or password.');
    }
}
    

module.exports = {
    home,
    getUser
};