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
        const overlay = req.body.overlay.overlayObject.overlayText   ;
        const fileStr = req.body.data;
        const color = req.body.overlay.overlayObject.color.css.backgroundColor
        const  x = Math.floor(req.body.overlay.overlayObject.position[0])
        const  y = req.body.overlay.overlayObject.position[1]
        const windowSize = req.body.overlay.overlayObject.windowSize
        console.log( 'ff', x,y)
        console.log( 'obj',req.body.overlay)
        // const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        //     upload_preset: 'workspace'
        // }, )

        const upLoadResponse2 =await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'workspace',
            transformation: [
                {overlay: {  font_family: "Roboto",
                             font_size: 80,
                             text:overlay},
                             color: color,quality: "auto",width:"1.0",height:"1.0",gravity:"center", x:( x-300) / windowSize[0] ,y:(y-300)/ windowSize[1]},

            ]},function(error, result) { console.log(result, error) })
        console.log('d', upLoadResponse2)
        return (upLoadResponse2)
    }catch(e) {
        console.log(e.message)
    }
}


module.exports= {
    getImages,
    uploadImage
}