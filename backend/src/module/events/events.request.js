const Joi = require("joi")

const EventDTO = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(10).max(500).required(),
    date: Joi.string().required(),
    image: Joi.string().required()
})

module.exports = EventDTO
