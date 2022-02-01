const Image = require("../models/image.model");
const User = require("../models/user.model");
const {cloudinary} = require("../utils/cloudinary");

const getImages = async ()=> {
    console.log('getImages')
    const {resources} = await cloudinary.search.expression().sort_by('public_id', 'desc')
        .max_results(30)
        .execute();
    const publicIds = resources.map( file => file.public_id);
    res.send(publicIds);
    return (data)
    // console.log('get users')
    // return('users')
}

module.exports= {
    getImages
}