const mongoose = require('mongoose')
const { status } = require('../../config/constant.config')

const bannerSchema = new mongoose.Schema({
    headline:{
        type:String,
        required:true
    },
    subheadline:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    primaryCta:{
        type:String,
        required:true
    },
    primaryCtaLink:{
        type:String,
        required:true
    },
    secondaryCta:{
        type:String,
    },
    secondaryCtaLink:{
        type:String,
    },
    status:{
        type:String,
        enum:[...Object.values(status)],
        default:status.ACTIVE
    }
    
})

const BannerModel = mongoose.model('Banner', bannerSchema)

module.exports = BannerModel