const Image = require("../models/image.model");
const User = require("../models/user.model");
const {cloudinary} = require("../utils/cloudinary");

const findUser = async (id) => {
    return User.findById(id)
}

const getImages = async () => {
    return await cloudinary.search.expression('folder:workspaceop/*').sort_by('public_id', 'desc')
        .max_results(50)
        .execute();

}


const getMongoImages = async () => {
    const images = await Image.find()
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
    // console.log('user',user)
    // try {
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
        // console.log('mon',mongoImage)
        user.images.push(mongoImage._id)
        await user.save()
        return (mongoImage)
    // }
    // catch (e) {
    //     console.log('ererererer', e)
    //     throw new Error(e.message)
    // }
}

const deleteImage = async (id) => {
    // TODO:add checks and validations
    const user = await User.findById(id);
    const image = await Image.findOne({_id: id})
    await cloudinary.uploader.destroy(image.public_id, function (error, result) {
        console.log(result, error)
    });

    await image.delete()
    user.images.pull({_id: id})
    user.save()
    return (image);
}

const deleteAllImagesByUser = async (id) => {
    const user = await findUser(id)
    console.log('user', user)
    // await cloudinary.uploader.destroy({},{tags:user.name}, function(error,result)  {console.log(result, error); });
    await cloudinary.api.delete_resources_by_tag(user.name, function (error, result) {
        console.log(result, error)
    })
    const deletedImages = await Image.deleteMany({createdBy: id})
    user.images = [];
    user.save()
    console.log('dI', deletedImages)
    return deletedImages
}

const filterImages = async (id) => {
    const user = await User.findById(id)
    console.log('filter images user', user);
    const images = user.images
    console.log(images)
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
