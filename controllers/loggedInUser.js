const Post = require("../models/Post");

const AuthPage = async (req, res) => {
  try {
    const posts = await Post.find().sort({ dateNew: -1 });
/*     const month = req.body.month;
    const day = req.body.day;
    const year = req.body.year;
    const date = `${day}.${month}.${year}`;
    const paivays = new Date(date) */;  

    if (posts) {
      const simplifiedPosts = posts.map((post) => {
        const date = new Date(post.date);
        const dateNew = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`
        const time = `${date.getHours()}.${date.getMinutes()}`
        return {
          _id: post._id,
          username: post.username,
          content: post.content,
          date: dateNew + " " + time
        };
        
      });
      res.render("authenticatedUser", { posts: simplifiedPosts, firstname: req.user.firstname,
        lastname: req.user.lastname, });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

const deletePostById = async (postId) => {
  try {
    const result = await Post.findByIdAndDelete(postId);
    if (result) {
      console.log(`Successfully deleted post with id ${postId}`);
    } else {
      console.log(`Post with id ${postId} not found`);
    }
  } catch (err) {
    console.error(`Error deleting post with id ${postId}: ${err}`);
    throw err;
  }
};

const deletePost = async (req, res) => {
  try {
  
    const postId = req.params._id;
    await deletePostById(postId);
    res.redirect("/AuthPage");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
}; 

 const editPost = async (req, res) => {
  const postId = req.params._id;
  console.log(postId);
  const postToEdit = await Post.findOne({ _id: postId });
  console.log(postToEdit);
  res.render('editPage', { _id: postToEdit._id, content:postToEdit.content });
};



const updatePost = async (req, res) => {
  try {
    const postId = req.params._id;
    const content = req.body.content;

    console.log("Post ID:", postId);
    console.log("Updated Content:", content);

    await Post.updateOne({ _id: postId }, { content: content });

    res.redirect('/AuthPage');
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};
const createPost = async (req, res) => {
  try {
    const  content  = req.body.content;
    const username = req.user.firstname;
 /*    const month = req.body.month;
    const day = req.body.day;
    const year = req.body.year;
    const date = `${day}.${month}.${year}`;
    const paivays = new Date(date);  */
    const date = new Date();


    const newPost = new Post({ content, username, date });
    await newPost.save();

    res.redirect("/AuthPage");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};


 
module.exports = {
  AuthPage,
  deletePost,
  deletePostById,
  editPost,
  updatePost,
  createPost 
};