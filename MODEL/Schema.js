const mongoose = require("mongoose");

const Listschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    gender: {
        type: String,
        require: true,
    }
});

module.exports = mongoose.model('Lists', Listschema);