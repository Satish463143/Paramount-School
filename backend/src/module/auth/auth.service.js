const userModel = require("./user.model");

class AuthService{
    async getSingleUserByFilter(filter){
        try{
            const userDetails = await userModel.findOne(filter);
                if(userDetails){
                    return userDetails
                }else{
                    throw {status:404, message:"Credentials do not match"}
                }
        }
        catch(exception){
           throw exception
        }
    }


}
module.exports = new AuthService();