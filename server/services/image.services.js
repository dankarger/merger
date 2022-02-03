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
        const overlay = req.body.overlay.overlayText   ;
        const fileStr = req.body.data;
        console.log( req.body.overlay.overlayText)
        // const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        //     upload_preset: 'workspace'
        // }, )

        const upLoadResponse2 =await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'workspace',
            transformation: [
                {overlay: {  font_family: "Roboto",
                             font_size: 80,
                             text:overlay}},

            ]})
        // console.log('d', upLoadResponse2)
        return (upLoadResponse2)
    }catch(e) {
        console.log(e.message)
    }
}


module.exports= {
    getImages,
    uploadImage
}