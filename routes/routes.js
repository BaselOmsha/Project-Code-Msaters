const express = require('express');
const router = express.Router();

const loginController = require('../controllers/login.js');
const signupController = require('../controllers/signup.js');
const readController = require("../controllers/read.js");
//const deleteController = require("../controllers/deletePost.js");


router.get('/', loginController.home);

router.get('/registration', signupController.signupForm);

router.post('/signup', signupController.signup);

router.get("/guest",readController.guestPage);

//router.post("/guest/delete/:_id",readController.deletePost);
router.get("/guest/:_id",readController.deletePost)

//router.post("/guest/delete/:_id",readController.deletePostById);
router.get("/guest/:_id",readController.deletePostById)

//router.post("/deletePost/:postId", deleteController.deletePost);
//router.get("/deletePost/:postId", deleteController.deletePost);


//router.post('/deletePost/:postId', deleteController.deletePost);


module.exports = router;