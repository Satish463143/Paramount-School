const contactService = require("./contact.service");

class ContactController {
    createContact = async (req, res,next) => {
        try {
            const body = req.body;
            const contact = await contactService.createContact(body)

            //send user mail
            await contactService.sendMail({name:body.name,email:body.email,subject:body.subject})
            //send admin mail
            await contactService.sendAdminMail({name:body.name,email:body.email,subject:body.subject,message:body.message, number:body.number})
            
            
            res.json({
                result:contact,
                message:"Contact created successfully",
                meat:null
            })
            
        } catch (error) {
            next(error)            
        }
    }
    getAllContact = async (req, res,next) => {
        try {
            const limit = parseInt(req.query.limit) || 10;
            const page = parseInt(req.query.page) || 1;
            const skip = (page - 1) * limit;

            const filter = {}
            if(req.query.search){
                filter.name = new RegExp(req.query.search,"i")
            }

            const {count , data } = await contactService.getAllContact(filter, skip, limit)
            
            res.json({
                result:data,
                message:"Contact fetched successfully",
                meta:{
                    total:count,
                    currentPage:page,
                    limit:limit
                }
            })
            
        } catch (error) {
            next(error)
            
        }
    }
    
}
module.exports = new ContactController();