const User = require("../models/user.model");
const bcrypt = require('bcrypt');
const {checkBodyRequest} = require("../utils/utils");




const getUsers = async ()=> {
    console.log('getUsers')
    const data =  await User.find();
    console.log('data',data)
    return (data)
    // console.log('get users')
    // return('users')
}


const getUser = async (email,password) => {
    // const user = await User.findOne({passId: passId})
    // return (user)
    return('find-user')
}

const checkIfUserExist = async (email) => {
  if (await User.find({email:email})) {
          throw new Error('User with the same Email all ready Exist')
  }
}

const addUser = async (req, res) => {

        await checkIfUserExist(req.body.email)
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const userObject = {
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
        }
    const user = await User.create(userObject)
    // const addedUser = await User.create(user)
    return (user)

}

module.exports={
    getUsers,
    addUser,
    getUser
}