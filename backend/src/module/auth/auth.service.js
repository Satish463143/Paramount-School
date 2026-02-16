const userModel = require("./user.model");

class AuthService{
    async getSingleUserByFilter(filter){
        try{
            const user = await userModel.findOne(filter);
            if(!user){
                throw new Error("User not found");
            }
            return user;
        
        }catch(exception){
            throw(exception)
        }
    }


}
module.exports = new AuthService();