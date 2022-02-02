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
    try {
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'workspace'
        })

        return ('file uploaded')
    }catch(e) {
        console.log(e.message)
    }
}


module.exports= {
    getImages,
    uploadImage
}