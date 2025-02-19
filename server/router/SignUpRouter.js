const express = require('express');
const {signupController} = require('../controllers/Admin');
const signupRouter = express.Router();


// Login route to validate email and password
signupRouter.post('/',signupController);

module.exports = signupRouter;
