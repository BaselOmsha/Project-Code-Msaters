const Post = require("../models/Post");
//const template = Handlebars.compile(source, { allowProtoMethodsByDefault: true });

const guestPage = async (req, res) => {
  try {
    const posts = await Post.find();

    if (posts) {
      const simplifiedPosts = posts.map((post) => {
        return {
          _id: post._id,
          username: post.username,
          content: post.content,
          date: post.date,
          //img: post.img
        };
      });
      res.render("guestPage", { posts: simplifiedPosts });
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
    res.redirect("/guest");
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

    res.redirect('/guest');
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};


 
module.exports = {
  guestPage,
  deletePost,
  deletePostById,
  editPost,
  updatePost 
};