const jwt=require('jsonwebtoken');

export const createToken= (user) => {
    const username = user.name;
    const userToken = {name:username}
    return jwt.sign(userToken, process.env.ACCESS_TOKEN_SECRET)

}

export const authenticateToken =(req, res , nex) => {
    const authHeader = req.headers[]
    Bearer TOKEN
}