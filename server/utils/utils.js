

const checkBodyRequest=(req)=> {
    if(!req.body.name) throw  new Error('Must enter Name');
    if(!req.body.email) throw  new Error('Must enter Email ');
    if(!req.body.password) throw  new Error('Must enter PassWord');
}


module.exports = {
    checkBodyRequest,


}