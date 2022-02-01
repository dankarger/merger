const userService = require('../services/user.services')
const utils = require('../utils/utils')

const getUsers = async function (req, res) {
    try {
        const users = await userService.getUsers();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).json({message: 'Users not found'})
    }
}


const getUser = async function (req, res) {
    try {
        // if(req.params.passId<0) { throw new Error('Error passPort ') }
        const user = await userService.getUser(req.params.passId);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).json({message: 'User not found'})
    }
}

const addUser = async function (req, res) {
    try {
        utils.checkBodyRequest(req);
        const users = await userService.addUser(req, res);
        res.status(200).send(users);
    } catch (e) {
        console.log('e',e)
        if(e.message.includes('E11000')){
            res.status(400).send({message:'Error - passPort ID all ready exist in the bank '})
        }
        res.status(400).send({message: e.message})
    }
}


module.exports = {
    getUsers,
    getUser,
    addUser
}