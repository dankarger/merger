const Image = require("../models/image.model");
const User = require("../models/user.model");
const {cloudinary} = require("../utils/cloudinary");

const findUser= async (id)=>{
   return User.findById(id)
}

const getImages = async ()=> {
    // console.log('getImages22')
    const resources = await cloudinary.search.expression('folder:workspaceop/*').sort_by('public_id', 'desc')
        .max_results(50)
        .execute();
    // const publicIds = await resources.map( file => file.public_id);
    // console.log('gg',resources)

    return resources
    // res.send(publicIds);
    // return (data)
    // return resources
    // console.log('get users')
    // return('users')
}


const getMongoImages= async ()=> {
    const images = await Image.find()
    console.log('mongoimage',images)
    return images
}

const uploadImage = async (req,res)=> {
    try {
        const user = await findUser("61fdbde72601c0ac1f890bbb")
        console.log('uuuuser',user)
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

        const upLoadResponse2 =await cloudinary.uploader.upload(fileStr,  {
            upload_preset: 'workspace',tags: user.name,
            transformation: [
                {overlay: {  font_family: "Roboto",
                             font_size: 80,
                             text:overlay},
                             color: color,quality: "auto",width:"1.0",height:"1.0",gravity:"center", x:( x-300) / windowSize[0] ,y:(y-300)/ windowSize[1]},
            ]},function(error, result) { console.log(result, error) })
        console.log('d', upLoadResponse2)

        const mongoImage = await addImage(upLoadResponse2,user)
        return (mongoImage)

    }catch(e) {
        console.log(e.message)
    }
}

    const addImage = async (response,user) => {
    // const user = await User.findById("61fdbde72601c0ac1f890bbb");
        console.log('user',user)
        const image = {
            title:"test-kyle2",
            url:response.url,
            public_id:response.public_id,
            createdBy:user._id,
            nameOfUser:user.name,
            dateCreated:Date.now()
        }
        const mongoImage = await Image.create(image)
        console.log('mon',mongoImage)
         user.images.push(mongoImage._id)
        await user.save()
        // console.log('mong',mongoImage)
        return (mongoImage)

}

const deleteImage = async (id) => {
    // TODO:add checks and validations
    const user = await User.findById("61fdbde72601c0ac1f890bbb");
    const image = await Image.findOne({_id:id})
    // const image = await Image.deleteOne({_id:id});
    await cloudinary.uploader.destroy(image.public_id, function(error,result) {
        console.log(result, error) });
    await image.delete()
    user.images.pull({_id:id})
    user.save()
    return (image);
}

const deleteAllImagesByUser = async (id) => {
     const user = await findUser(id)
    console.log('user',user)
    // await cloudinary.uploader.destroy({},{tags:user.name}, function(error,result)  {console.log(result, error); });
    await cloudinary.api.delete_resources_by_tag(user.name,  function(error,result)  {console.log(result, error)})
    const deletedImages =  await Image.deleteMany({createdBy:id})
    user.images = [];
    user.save()
    console.log('dI',deletedImages)
     return deletedImages
}


module.exports= {
    getImages,
    uploadImage,
    getMongoImages,
    addImage,
    deleteImage,
    deleteAllImagesByUser
}