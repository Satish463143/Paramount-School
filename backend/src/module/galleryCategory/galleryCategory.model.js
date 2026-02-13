const mongoose = require("mongoose");

const galleryCategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true
    }    
},{
    autoCreate:true,
    autoIndex:true,
    timestamps:true
})

const GalleryCategory = mongoose.model("GalleryCategory",galleryCategorySchema)

module.exports = GalleryCategory