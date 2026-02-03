const jwt = require("jsonwebtoken");
const loginCheck = (req,res,next)=>{
    try{
        const token = req.headers['authorization'] || null;

        if(!token ){
            throw {status:401, message:"Unauthorized access: token not provided"}
        }

        const data = jwt.verify(token, process.env.JWT_SECRET)
        if(data.hasOwnProperty('type')){
            throw {status:403, message:"Unauthorized access: invalid token type"}
        }

        // to do for user role

    }catch(exception){
        console.log(exception)
        next({status:exception.status || 401, message:exception.message || "Unauthorized"})
    }
}
module.exports = loginCheck