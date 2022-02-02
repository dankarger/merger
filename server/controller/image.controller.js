const imageService = require('../services/image.services')
const utils = require('../utils/utils')
const {cloudinary} = require('../utils/cloudinary')

const getImages = async function (req, res) {
    try {
        // const {resources} = await cloudinary.search.expression().sort_by('public_id', 'desc')
        //     .max_results(30)
        //     .execute();
        // const publicIds = resources.map( file => file.public_id);
        // res.send(publicIds);
        const images = await imageService.getImages()
        res.status(200).send(images);
    } catch (e) {
        res.status(400).json({message: 'Images not found'})
    }
}

const uploadImage =async (req, res)=> {
    try {
        const fileStr = req.body.data;
        console.log('filestr',fileStr)
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset:'workspace'
        })
        console.log('up',uploadResponse)
        res.json('yayayaya')
        console.log(fileStr)
    } catch (error) {
        console.error(error)
        res.status(500).json({err:error.message})
    }
}

module.exports = {
    getImages,
    uploadImage
}