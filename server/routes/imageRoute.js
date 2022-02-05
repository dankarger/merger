const express = require('express');
const imageRoute = express.Router();
const imageController = require('../controller/image.controller')
// const upload =require("../utils/utils.upload");
const {upload, upload2} = require('../middlewares/multerUpload')


imageRoute.get('/',imageController.getImages )
imageRoute.post('/',imageController.uploadImage )
imageRoute.delete('/:id',imageController.deleteImage)
imageRoute.delete('/delete-all/:id',imageController.deleteAllImagesByUser)

// imageRoute.post('/',upload2,imageController.uploadImage )
// imageRoute.post('/' ,imageController.uploadImage )




module.exports = imageRoute;
