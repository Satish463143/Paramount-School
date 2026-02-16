const mongoose = require('mongoose');
const { role } = require('../../config/constant.config');
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        min:3,
        max:50,
        required:true
    },
    phone:{
        type:String,
        min:10,
        max:15,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:30
    },
    role:{
        type:String,
        enum:[...Object.values(role)],
        default:role.USER
    },
    activeFor:{
        type:Date,
        required:true
    },
    token:{
        type:String,
        default:null
    },
    refreshToken:{
        type:String,
        default:null
    }
    
},{
    autoIndex:true,
    timestamps:true,
    autoCreate:true
}
)
const userModel = mongoose.model('user',userSchema)
module.exports = userModel