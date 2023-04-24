const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const router = express.Router();

const User = require('../models/User');

const dbURI = 'mongodb+srv://'+ process.env.DBUSER +':'+ process.env.DBPASSWD +''+ process.env.CLUSTER +'.mongodb.net/'+ process.env.DB +'?retryWrites=true&w=majority'
mongoose.connect(dbURI); 
const Product = require('../models/User');

//home/root
const home = async (req,res) => {
    // res.send('My MVC App');
    res.render('logIn', {
        // page_title: "Library",
        // content: data
    });
}


module.exports = {
    home
};