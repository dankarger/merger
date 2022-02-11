const express = require('express');
const imageRoute = express.Router();
const imageController = require('../controller/image.controller')
// const upload =require("../utils/utils.upload");
const {upload, upload2} = require('../middlewares/multerUpload')
const auth = require('../middlewares/auth')
const userController = require("../controller/user.controller");


imageRoute.get('/',imageController.getImages )
// imageRoute.post('/',imageController.uploadImage )
imageRoute.delete('/:id',imageController.deleteImage)
imageRoute.delete('/delete-all/:id',imageController.deleteAllImagesByUser)

imageRoute.post('/',imageController.uploadImage )
// imageRoute.post('/' ,imageController.uploadImage )
imageRoute.post('/filter-images',auth.authenticateToken,imageController.filterImages)





module.exports = imageRoute;
