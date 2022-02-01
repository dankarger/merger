



const getUsers = async ()=> {
    // const data =  await User.find();
    // return (data)
    console.log('get users')
    return('users')
}


const getUser = async (passId) => {
    // const user = await User.findOne({passId: passId})
    // return (user)
    return('find-user')
}



const addUser = async (req, res) => {
    // const user = await User.create(req.body)
    // return (user)
    console.log('add user')
    return('add-user')
}

module.exports={
    getUsers,
    addUser,
    getUser
}