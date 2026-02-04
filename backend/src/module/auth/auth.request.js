const joi = require('joi');

const loginRequest = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
})
const signupRequest =joi.object({
    name:joi.string().min(3).max(50).required(),
    phone:joi.string().min(10).max(15).required(),
    email:joi.string().email().required(),
    password:joi.string().min(8).max(30).required()
})

module.exports = {
    loginRequest,
    signupRequest
};