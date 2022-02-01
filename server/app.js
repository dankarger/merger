const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require("./db/mongoose")

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt')


const  app = express();
const PORT = process.env.PORT || 8080 ;
const route = require('./routes/route');
const userRoute = require('./routes/userRoute')

let publicPath = path.join(__dirname, '../client/build')
if(PORT===8080){
    publicPath = path.join(__dirname, '../client/public')
}

app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));


app.use('/api/users', userRoute)

//
// app.get('/',(req,res)=>{
//     console.log('hhhh')
//     // res.send('heeeloo')
//     res.sendFile(path.resolve(publicPath, 'index.html'));
//
// })

app.get('*', (req,res)=> {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})