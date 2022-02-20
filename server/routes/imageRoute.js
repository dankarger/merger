const express = require('express');
const imageRoute = express.Router();
const imageController = require('../controller/image.controller')
const {upload, upload2} = require('../middlewares/multerUpload')


imageRoute.get('/',imageController.getImages );
imageRoute.post('/get',imageController.filterImages )
imageRoute.delete('/:id',imageController.deleteImage)
imageRoute.delete('/delete-all/:id',imageController.deleteAllImagesByUser)
imageRoute.post('/',imageController.uploadImage )
imageRoute.post('/filter-images',imageController.filterImages)





module.exports = imageRoute;
