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

module.exports = guestPage;