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


const findUser = async (email) => {
    const user = User.findOne({email:email})
    return(user)
}

  const checkIfUserExist = async (email) => {
  const user = await User.findOne({email:email})
  if(user) {
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
    return (user)
}

const loginUser = async (req,res)=> {
    const user = findUser(req.email);
    if(user === null) {
       return new Error('Cannot find user ')
    }
        if(await bcrypt.compare(req.body.password, user.password)) {
            return ('Success')
        }else {
            return new Error('password incorrect ')
            }
}

module.exports={
    getUsers,
    addUser,
    findUser,
    loginUser,

}