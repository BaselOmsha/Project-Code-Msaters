const mongoose = require('mongoose');

const readSchema = new mongoose.Schema({
/*     _id:{
        type: String,
        require: true
    },   */

    username : {
        type: String,
        require: true
    },
    content : {
        type: String,
        require: true
    },
    date : {
        type: String,
        //default:Date.now
    },
/*     img :{
        type: String,
        require: true
    } */

});

module.exports = mongoose.model('Post', readSchema,);
//const Post = require("../models/Post");
