const mongoose = require("mongoose");

const testimonalSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        required: true
    }
},{
    autoCreate:true,
    autoIndex:true,
    timestamps:true
})

const TestimonalModel = mongoose.model("Testimonal",testimonalSchema)

module.exports = TestimonalModel