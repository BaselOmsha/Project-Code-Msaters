const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

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
    },
    description: {
        type: String
    },
    hobbies:  {
        type: String
    }
});

module.exports = mongoose.model('User', userSchema);