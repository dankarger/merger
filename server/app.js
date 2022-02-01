const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const  app = express();
const PORT = process.env.PORT || 8080 ;



let publicPath = path.join(__dirname, '../client/build')
if(PORT===8080){
    publicPath = path.join(__dirname, '../client/public')
}

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + publicPath));



app.get('/',(req,res)=>{
    console.log('hhhh')

})

app.use('*', (req,res)=> {
    res.send("this routes does not exist")
});


app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})