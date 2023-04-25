const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/User');



//home/root
const home = async (req,res) => {
    res.render('logIn', {
        // page_title: "Library",
        // content: data
    });
}


module.exports = {
    home
};