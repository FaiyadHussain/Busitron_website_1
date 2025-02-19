const express = require('express');
const { loginController } = require('../controllers/Admin'); // Destructure to get the loginController
const loginRouter = express.Router();

// Login route to validate email and password
loginRouter.post('/', loginController);  

module.exports = loginRouter;
