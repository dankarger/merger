const imageService = require('../services/image.services')
const utils = require('../utils/utils')
const {cloudinary} = require('../utils/cloudinary')

const getImages = async function (req, res) {
    try {
        const images = await imageService.getMongoImages()
        console.log('controlletimages',images)
        res.status(200).send(images);
    } catch (e) {
        res.status(400).json({message: 'Images not found'+ e.message})
    }
}

const uploadImage =async (req, res)=> {
    try {
      const image = await imageService.uploadImage(req,res)
      res.status(200).send(image);
    } catch (error) {
        console.error(error)
        res.status(500).send({error:error})
    }
}

const deleteImage = async function (req, res) {
    try {
        const deleteImage = await imageService.deleteImage(req.params.id);
        res.status(200).send(deleteImage);
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}
module.exports = {
    getImages,
    uploadImage,
    deleteImage
}