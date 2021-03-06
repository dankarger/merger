const imageService = require('../services/image.services')
const utils = require('../utils/utils')
const {cloudinary} = require('../utils/cloudinary')
const userService = require("../services/user.services");
const bcrypt =require('bcrypt');


const getImages = async function (req, res) {
    try {
        const images = await imageService.getMongoImages()
        res.status(200).send(images);
    } catch (e) {
        res.status(400).json({message: 'Images not found'+ e.message})
    }
}

const uploadImage =async (req, res)=> {
    try {
      const image = await imageService.uploadImage(req,res)
      res.status(200).send(image);
    } catch(error) {
        console.log('error',error)
        res.status(500).send({error:error})
    }
}

const deleteImage = async function (req, res) {
    try {
        const password = req.body.password;
        const userId=req.body.userId;
        const id= req.params.id
        console.log('ggg',id,userId)
        const deleteImage = await imageService.deleteImage(id,password,userId);
        res.status(200).send(deleteImage);
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}

const deleteAllImagesByUser = async function (req, res) {
    try {
        const deleteImage = await imageService.deleteAllImagesByUser(req.params.id);
        res.status(200).send(deleteImage);
    } catch (e) {
        res.status(400).json({error: e.message})
    }
}


const filterImages= async (req,res)=> {
    console.log('b',req.body)
    try {
        const images = await imageService.filterImages(req.body.userId);
        res.status(200).send(images);
    } catch (e) {
        console.log('filter',e)
        res.status(400).send({message:e.message})
    }
}


module.exports = {
    getImages,
    uploadImage,
    deleteImage,
    deleteAllImagesByUser,
    filterImages
}