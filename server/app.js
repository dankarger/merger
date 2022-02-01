const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const cors = require('cors');
const  app = express();

app.use(express.json());
app.use(cors());
app.use(express.static());





app.use('*', (req,res)=> {
    res.send("this routes does not exist")
});

const PORT = process.env.PORT || 8080 ;

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})