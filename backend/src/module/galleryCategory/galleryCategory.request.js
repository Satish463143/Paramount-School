const Joi = require("joi")

const galleryCategoryDTO = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    tagline: Joi.string().min(3).max(50).required(),
    image: Joi.string().optional(),
})

module.exports = galleryCategoryDTO
