const express = require('express');
const imageRoute = express.Router();
const imageController = require('../controller/image.controller')


imageRoute.get('/', imageController.getImages )




module.exports = imageRoute;
