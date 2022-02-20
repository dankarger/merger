const jwt=require('jsonwebtoken');

const createToken= (user) => {
    const username = user.name;
    const userToken = {name:username}
    const accessToken = generateAccessToken(userToken);
    const refreshToken = jwt.sign(userToken, process.env.REFRESH_TOKEN_SECRET)
    return ({accessToken:accessToken, refreshToken:refreshToken})

}

const authenticateToken =(req, res , next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null) return res.sendStatus(401);
    jwt.verify(token , process.env.ACCESS_TOKEN_SECRET, (err, user)=> {
        if (err) {
            console.log(err)
           return ('problem with token')
        }
        req.user = user
        next()
    })
}

function generateAccessToken(user){
      return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1h'})

}
module.exports ={
    authenticateToken,
    createToken
}