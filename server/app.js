const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require("./db/mongoose")
const express = require('express');
const cors = require('cors');

const  app = express();
const PORT = process.env.PORT || 8080 ;
const imageRoute = require('./routes/imageRoute');
const userRoute = require('./routes/userRoute')

let publicPath = path.join(__dirname, '../client/build')
if(PORT===8080){
    publicPath = path.join(__dirname, '../client/public')
}

app.use(cors());
app.use(express.static(publicPath));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb' ,extended: false,
    parameterLimit:50000}));
app.use(express.json());

app.use('/api/users', userRoute)
app.use('/api/images', imageRoute )



app.get('*', (req,res)=> {
    res.sendFile(path.resolve(publicPath, 'index.html'));
});


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})