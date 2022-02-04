const imageService = require('../services/image.services')
const utils = require('../utils/utils')
const {cloudinary} = require('../utils/cloudinary')

const getImages = async function (req, res) {
    try {
        const images = await imageService.getImages()
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

module.exports = {
    getImages,
    uploadImage
}