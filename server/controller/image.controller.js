const userService = require('../services/user.services')
const utils = require('../utils/utils')
const {cloudinary} = require('../utils/cloudinary')

const getImages = async function (req, res) {
    try {
        const {resources} = await cloudinary.search.expression().sort_by('public_id', 'desc')
            .max_results(30)
            .execute();
        const publicIds = resources.map( file => file.public_id);
        res.send(publicIds);
    } catch (e) {
        res.status(400).json({message: 'Images not found'})
    }
}


module.exports = {
    getImages
}