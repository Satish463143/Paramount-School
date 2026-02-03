
const bodyValidator = (schema)=>{
    return async(req,res,next)=>{
        try{
            const data = req.body

            if(req.file){
                data[req.file.fieldname] = req.file.fieldname
            }
            await schema.validateAsync(data, {abortEarly:false})
            next()
            
        }catch(exception){
            const details = {}
            
            if(exception.isJoi && exception.details){
                exception.details.map((error)=>{
                    console.log(error)
                    details[error["path"][0]] = error.message
                })
            }else{
                console.log(exception)
            }
            next ({
                status:400,
                message:"Validation error",
                details:Object.keys(details).length > 0 ? details: {error :"An unknown validation error occurred"}
            })
        }
    }
}

module.exports = bodyValidator