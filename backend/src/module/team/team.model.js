const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
},{
    autoCreate:true,
    autoIndex:true,
    timestamps:true
})

const TeamModel = mongoose.model("Team",teamSchema)

module.exports = TeamModel