const Post = require('../models/Post');


const guestPage = async(req,res)=>{
    //let Posts = schemas.Posts;
    const posts = await Post.find();

    console.log(posts)
    if(posts){
        res.render("guestPage",{posts})
        // res.send(posts);
    }
};

module.exports ={
    guestPage
};