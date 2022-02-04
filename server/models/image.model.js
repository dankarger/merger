const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
    title: {
        type: String,
        require:[true, 'Must enter title']
    },
    url: {
        type: String,
        require:true,
        // unique:[true, 'Email must be unique'],

    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'

    },
    nameOfUser:{
        type:String
    },
    dateCreated:Date,

});

module.exports = mongoose.model("Image", imageSchema);