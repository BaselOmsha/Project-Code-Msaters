const Post = require('../models/Post');

const guestPage = async (req, res) => {
    const posts = await Post.find();

    console.log(posts)
    if (posts) {
        const simplifiedPosts = posts.map(post => {
            return {
                username: post.username,
                content: post.content,
                date: post.date,
                //img: post.img

            };
        });
        res.render("guestPage", { Title: "Guest Page - Code Masters", posts: simplifiedPosts });
    }
};

module.exports = {
    guestPage
};
