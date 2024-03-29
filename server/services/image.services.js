const Image = require("../models/image.model");
const User = require("../models/user.model");
const {cloudinary} = require("../utils/cloudinary");
const mongoose = require('mongoose')

const findUser = async (id) => {
    return User.findById(id)
}

const getImages = async () => {
    return await cloudinary.search.expression('folder:workspaceop/*').sort({user: -1})
        // .max_results(50)
        .execute();
}


const getMongoImages = async (userId) => {
    const images = await Image.find({createdBy: userId})
    return images
}

const uploadImage = async (req, res) => {
    const user = await findUser(req.body.user._id || req.body.user.id)
    const fileStr = req.body.data;
    const imageTitle = req.body.title;
    const imageFormat = req.body.format;
    const vectorize = (imageFormat === 'SVG' ? "vectorize:detail:1.0:corners:40:colors:3" : '')
    const upLoadResponse2 = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'workspace',
            tags: user.name,
            sign_url: true, format: imageFormat,
            effect: vectorize
        },
        function (error, result) {
            console.log(result, error)
        })
    const mongoImage = await addImage(upLoadResponse2, user, imageTitle)
    return (mongoImage)
}

const addImage = async (response, user, imageTitle) => {
    const image = {
        title: imageTitle,
        url: response.url,
        secure_url: response.secure_url,
        public_id: response.public_id,
        createdBy: user._id,
        nameOfUser: user.name,
        dateCreated: Date.now()
    }
    const mongoImage = await Image.create(image)
    user.images.push(mongoImage._id)
    await user.save()
    return (mongoImage)
}


const deleteImage = async (id, password, userId) => {
    const image = await Image.findOne({_id: id})
    const user = await User.findById(image.createdBy);
    // console.log('deleteService', image.createdBy, user.id, mongoose.Types.ObjectId(userId))
    if (userId === user.id) {
        console.log('dasdasdasdasdasdasdasdasd')
        await cloudinary.uploader.destroy(image.public_id, function (error, result) {
            // console.log(result, error)
        });
        await image.delete()
        user.images.pull({_id: id})
        user.save()
        // console.log('delete card:1')
        return (user);
    } else {
        throw new Error('Incorrect User')
    }
}

const deleteAllImagesByUser = async (id) => {
    const user = await findUser(id)
    await cloudinary.api.delete_resources_by_tag(user.name, function (error, result) {
        console.log(result, error)
    })
    const deletedImages = await Image.deleteMany({createdBy: id})
    user.images = [];
    user.save()
    return deletedImages
}

const filterImages = async (id) => {
    const images = await Image.find({createdBy: id})
    return images
}

module.exports = {
    getImages,
    uploadImage,
    getMongoImages,
    addImage,
    deleteImage,
    deleteAllImagesByUser,
    filterImages
}
