const userModel = require("./user.model");

class UserService{
    getSingleUserByFilter = async(filter)=>{
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
module.exports = new UserService();