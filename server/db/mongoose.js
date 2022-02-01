const mongoose = require('mongoose');
const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const URL= process.env.URL_MONGO;

mongoose.connect(URL,()=>{
    console.log('connected');
})