
const hasPermission = (accessBy)=>{
    return (req,res,next)=>{
        try{
            const user = req.authUser

            if(!user){
                throw {status:401, message:"please login first"}
            }
            if(
                (typeof accessBy === 'string' && accessBy === user.role) 
                || 
                (Array.isArray(accessBy) && accessBy.includes(user.role))
            ){
                next()
            }else{
                throw {status:403, message:"You dont have permission to access this resource"}
            }            

            }catch(exception){
                console.log(exception)
                next({status:exception.status || 401, message:exception.message || "Unauthorized"})
        }
    }
    
}
module.exports = hasPermission