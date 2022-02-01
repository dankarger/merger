const mongoose = require("mongoose");
// const validator = require('validator')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require:[true, 'Must enter name']
    },
    email: {
        type: String,
        require:true,
        unique:[true, 'Email must be unique'],

    },
    password: {
        type: String,
        require:true,
    },
    images:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
});

module.exports = mongoose.model("User", userSchema);