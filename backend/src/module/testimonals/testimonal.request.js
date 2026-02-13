const Joi = require("joi")

const TestimonalDTO = Joi.object({
    message: Joi.string().min(3).max(500).required(),
    role: Joi.string().min(3).max(50).required(),
    author: Joi.string().required(),
    avatar: Joi.string().required()
})

module.exports = TestimonalDTO
