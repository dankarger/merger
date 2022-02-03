const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require("./db/mongoose")
const {cloudinary} = require('./utils/cloudinary')

const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt')
// const bodyParser = require('body-parser');


const  app = express();
const PORT = process.env.PORT || 8080 ;
const imageRoute = require('./routes/imageRoute');
const userRoute = require('./routes/userRoute')

let publicPath = path.join(__dirname, '../client/build')
if(PORT===8080){
    publicPath = path.join(__dirname, '../client/public')
}

app.use(express.json());
app.use(cors());
app.use(express.static(publicPath));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use('/api/users', userRoute)
app.use('/api/images', imageRoute )


//
// app.get('/',(req,res)=>{
//     console.log('hhhh')
//     // res.send('heeeloo')
//     res.sendFile(path.resolve(publicPath, 'index.html'));
//
// })

// app.get('/api/images', async (req,res)=> {
//     const {resources} = await cloudinary.search.expression().sort_by('public_id', 'desc')
//         .max_results(30)
//         .execute();
//     const publicIds = resources.map( file => file.public_id);
//     res.send(publicIds);
// })




app.get('*', (req,res)=> {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})