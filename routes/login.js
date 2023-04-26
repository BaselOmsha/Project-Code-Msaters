const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.js');


// router.get('/', async (req,res) => {
    
// });

router.get('/', loginController.home);
router.get('/', loginController.getUser);

module.exports =  router;