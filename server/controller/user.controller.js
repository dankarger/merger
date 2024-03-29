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
        const user = await userService.getUsers(req.params.id);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).json({message: 'User not found'})
    }
}

const addUser = async function (req, res) {
    try {
        utils.checkBodyRequest(req);
        const users = await userService.addUser(req, res);
        console.log('uuu',users)
        res.status(200).send(users);
    } catch (e) {
        console.log('e',e)
        // if(e.message.includes('E11000')){
            res.status(400).send({message:e.message})
        // }
        // res.status(400).send({message: e.message})
    }
}

const loginUser =async (req,res)=>{
    try {
        // utils.checkBodyRequest(req);

        const user = await userService.loginUser(req, res);
        res.status(200).send(user);
    } catch (e) {
        console.log('e',e)

            res.status(400).send({message:e.message})
        }



}


//
// const deleteUser = async function (req, res) {
//     try {
//         const deleteUser = await UserService.deleteUser(req.params.id);
//         res.status(200).send(deleteUser);
//     } catch (e) {
//         res.status(400).json({error: e.message})
//     }
// }

module.exports = {
    getUsers,
    getUser,
    addUser,
    loginUser
}