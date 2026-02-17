const joi = require('joi')
const { status } = require('../../config/constant.config')

const bannerDTO = joi.object({
    headline: joi.string().required(),
    subheadline: joi.string().required(),
    primaryCta: joi.string().required(),
    primaryCtaLink: joi.string().required(),
    secondaryCta: joi.string().optional().allow(''),
    secondaryCtaLink: joi.string().optional().allow(''),
    image: joi.string().optional(), // Made optional for updates
    status: joi.string().valid(...Object.values(status)).default(status.ACTIVE)
})

module.exports = {
    bannerDTO
}
