const { activeFor } = require("../../config/constant.config");
const userModel = require("../user/user.model");
const bcrypt = require('bcrypt');

class AuthService{
    async create(data){
        try{
            data.password =  bcrypt.hashSync(data.password,10)
            data.activeFor = new Date(Date.now()+ (parseInt(activeFor*60*60*1000 )))
            const response = await userModel.create(data)
            return response;
        }catch(exception){
            throw (exception)
        }        
    }
    async login(data){
        try{
             

        }catch(exception){
            throw(exception)
        }
    }

}
module.exports = new AuthService();