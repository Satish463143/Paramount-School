const Joi = require("joi")

const ContactDTO = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().required(),
    message: Joi.string().min(10).max(500).required(),
    number: Joi.string().min(10).max(15).required(),
    subject: Joi.string().required()
})

module.exports = ContactDTO
