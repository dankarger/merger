const User = require("../models/user.model");




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



const addUser = async (req, res) => {
    // const user = {
    //     name:"testy",
    //     email:"tttt@gmail.com",
    //     password:"asdas23rsdfsdfw4rsfg"
    // }
    const user = await User.create(req.body)
    // const addedUser = await User.create(user)
    return (user)
    // console.log('add user')
    // return('add-user')
}

module.exports={
    getUsers,
    addUser,
    getUser
}