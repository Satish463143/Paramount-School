const joi = require('joi')
const { NoticePriority, NoticeCategory } = require('../../config/constant.config')

const noticeDTO = joi.object({
    title: joi.string().required(),
    summary: joi.string().required(),
    category: joi.string().valid(...Object.values(NoticeCategory)).required(),
    priority: joi.string().valid(...Object.values(NoticePriority)).required(),
    date: joi.date().required()
})

module.exports = {
    noticeDTO
}
