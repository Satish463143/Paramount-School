const joi = require('joi');

const galleryDTO = joi.object({
    title: joi.string().required(),
    image: joi.string().required(),
    category: joi.array().items(joi.string()).required()
})

module.exports = {
    galleryDTO
}