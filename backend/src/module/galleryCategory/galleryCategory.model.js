const mongoose = require("mongoose");

const galleryCategorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },    

},{
    autoCreate:true,
    autoIndex:true,
    timestamps:true
})

const GalleryCategory = mongoose.model("GalleryCategory",galleryCategorySchema)

module.exports = GalleryCategory