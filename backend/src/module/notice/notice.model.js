const mongoose = require('mongoose')
const {  NoticeCategory, NoticePriority } = require('../../config/constant.config')

const noticeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:[...Object.values(NoticeCategory)],
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    summary:{
        type:String,
        required:true
    },
    priority:{
        type:String,
        enum:[...Object.values(NoticePriority)],
        required:true
    },
    
},{
    timestamps:true,
    autoIndex:true,
    autoCreate:true
})

const NoticeModel = mongoose.model('Notice', noticeSchema)

module.exports = NoticeModel