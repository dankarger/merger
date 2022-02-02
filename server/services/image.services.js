const Image = require("../models/image.model");
const User = require("../models/user.model");
const {cloudinary} = require("../utils/cloudinary");

const getImages = async ()=> {
    console.log('getImages22')
    const resources = await cloudinary.search.expression('folder:workspaceop/*').sort_by('public_id', 'desc')
        .max_results(30)
        .execute();
    // const publicIds = await resources.map( file => file.public_id);
    console.log('gg',resources)

    return resources
    // res.send(publicIds);
    // return (data)
    // return resources
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