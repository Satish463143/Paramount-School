const Joi = require("joi")

const EventDTO = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    role: Joi.string().min(10).max(500).required(),
    qualification: Joi.string().required(),
    image: Joi.string().optional()
})

module.exports = EventDTO
