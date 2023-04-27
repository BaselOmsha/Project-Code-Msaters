const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id : {
        type: String,
        require: true
    },
    firstname : {
        type: String,
        require: true
    },
    lastname : {
        type: String,
        require: true
    },
    email : {
        type: String,
        require: true
    },
    password : {
        type: String,
        require: true
    },
    dob : {
        type: String,
        require: true
    },
    gender : {
        type: String,
    }
});

module.exports = mongoose.model('User', userSchema);