const express = require('express');
const router = express.Router();
const productCOntroller = require('../controllers/login.js');


// router.get('/', async (req,res) => {
    
// });

router.get('/', productCOntroller.home);

module.exports =  router;