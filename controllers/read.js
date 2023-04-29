const Post = require("../models/Post");

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

module.exports = {
  guestPage,
  deletePost,
  deletePostById
};
