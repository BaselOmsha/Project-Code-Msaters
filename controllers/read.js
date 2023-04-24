const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/User');
const Post = require('../models/Post');


const guestPage = async(req,res)=>{
    //let Posts = schemas.Posts;
    let posts = await Post.find({Username:Username,Content:Content,Date:Date});
    console.log(posts)
    if(posts){
        res.render("guestPage",posts)
    }
};

module.exports ={
    guestPage
};
