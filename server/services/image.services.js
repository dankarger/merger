const Image = require("../models/image.model");
const User = require("../models/user.model");
const {cloudinary} = require("../utils/cloudinary");

const getImages = async ()=> {
    console.log('getImages')
    const {resources} = await cloudinary.search.expression().sort_by('public_id', 'desc')
        .max_results(30)
        .execute();
    // const publicIds = resources.map( file => file.public_id);
    // res.send(publicIds);
    // return (data)
    return resources
    // console.log('get users')
    // return('users')
}

const uploadImage = async (req,res)=> {
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset:'workspace'
    })
    res.json('file uploaded')
    return fileStr

}


module.exports= {
    getImages,
    uploadImage
}