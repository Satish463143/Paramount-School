const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
},{
    autoCreate:true,
    autoIndex:true,
    timestamps:true
})

const EventModel = mongoose.model("Event",eventsSchema)

module.exports = EventModel