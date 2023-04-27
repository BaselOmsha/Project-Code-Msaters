const mongoose = require('mongoose');

const readSchema = new mongoose.Schema({

    username : {
        type: String,
        require: true
    },
    content : {
        type: String,
        require: true
    },
    date : {
        type: Date,
        default:Date.now
    },
    img :{
        type: String,
        require: true
    }

});

module.exports = mongoose.model('Post', readSchema,);