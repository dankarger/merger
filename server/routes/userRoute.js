const express = require('express');
const userRoute = express.Router();
const userController = require('../controller/user.controller')
const auth = require('../middlewares/auth')



userRoute.get('/',userController.getUsers)
userRoute.post('/login',userController.loginUser)
userRoute.get('/find',auth.authenticateToken, userController.getUser)
userRoute.post('/',userController.addUser)




module.exports = userRoute;
