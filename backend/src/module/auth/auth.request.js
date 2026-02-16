const joi = require('joi');

const loginRequest = joi.object({
    email:joi.string().email().required(),
    password:joi.string().required()
})

module.exports = {
    loginRequest,
};