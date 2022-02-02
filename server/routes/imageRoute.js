const express = require('express');
const imageRoute = express.Router();
const imageController = require('../controller/image.controller')


imageRoute.get('/',imageController.getImages )
imageRoute.post('/',imageController.uploadImage )




module.exports = imageRoute;
