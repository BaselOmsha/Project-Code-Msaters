const express = require('express');

const User = require('../models/User');

//home/root
const home = async (req,res) => {
    // res.send('My MVC App');
    res.render('logIn', {
        Title:"Login Page - Code Masters"
        // page_title: "Library",
        // content: data
    });
}


module.exports = {
    home
};