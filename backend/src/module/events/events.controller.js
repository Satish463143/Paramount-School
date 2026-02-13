const eventService = require("./events.service")

class EventController  {
    event;
    create = async(req,res,next)=>{
        try{
            const data = req.body

            const response = await eventService.create(data)

            res.json({
                meta:null,
                message:"Event created successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    index = async(req,res,next)=>{
        try{
            const page= req.query.page || 1
            const limits = req.query.limit || 10
            const skip = (page-1)*limits

            const filter = {}
            if(req.query.search){
                filter.title = new RegExp(req.query.search, 'i')
            }
            const [count , data] = await eventService.listALL({filter, skip, limits})

            res.json({
                result:data,
                message:"Event list",
                meta:{
                    currentPage:page,
                    total:count,
                    limit:limits
                }
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    #validate = async(id)=>{
        try{
            if(!id){
                throw {status:400, message:"Id is required"}
            }
            this.event = await eventService.showById(id)
            if(!this.event){
                throw {status:404, message:"Event not found"}
            }            

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    showById = async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            res.json({
                meta:null,
                message:"Event details",
                data:this.event
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    update = async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            const data = req.body
            const response = await eventService.update(id, data)
            res.json({
                meta:null,
                message:"Event updated successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    delete = async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            const response = await eventService.delete(id)
            res.json({
                meta:null,
                message:"Event deleted successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}
module.exports = new EventController()