const mongoose = require('mongoose');

const readSchema = new mongoose.Schema({

    Username : {
        type: String,
        require: true
    },
    Content : {
        type: String,
        require: true
    },
    Date : {
        type: Date,
        default:Date.now
    },

});

module.exports = mongoose.model('Post', readSchema,);