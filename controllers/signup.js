const express = require('express');
const User = require('../models/User');

// Signupform
const signupForm = async (req, res) => {
    // res.send('My MVC App');
    res.render('createAccount', {

    });
}

// check for emails 
const checkEmail = async (email) => {
    const checkEmail = await User.find({ email: email });
    if (checkEmail.length > 0) {
        console.log(checkEmail + "is already in use");
        return true;
    } else {
        return false;
    }
}

// Signup finction creating a user
const signup = async (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const paswd = req.body.password;
    const month = req.body.month;
    const day = req.body.day;
    const year = req.body.year;
    // converting to Date string
    const date = `${day}.${month}.${year}`
    const paivays = new Date(date);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = paivays.toLocaleDateString(options);
    // console.log(formattedDate);
    const gender = req.body.gender;
    try {
        // console.log(req.body);
        // const paivays = new Date()

        if (!firstname || !lastname || !email || !paswd || !formattedDate) {
            res.status(400).send(
                { msg: 'info missing' }
            )
        } else {
            const newUser = {
                firstname: firstname, lastname: lastname, email: email,
                password: paswd, dob: formattedDate, gender: gender
            }
            if (await checkEmail(email) === false) {
                const user = await User.insertMany(newUser);
                if (user) {
                    res.send("user added successfully");
                    console.log("user added successfully")
                } else {
                    res.send("something went wrong!");
                }
            } else {
                res.send("Email already in use!");
            }
        }

    } catch (error) {
        console.log(error);
        res.send(" Server side error creating a user");
    }
}

module.exports = {
    signupForm,
    signup
};