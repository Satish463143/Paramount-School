const TestimonalService = require("./testimonal.service")

class TestimonalController  {
    testimonal;
    create = async(req,res,next)=>{
        try{
            const data = req.body

            const response = await TestimonalService.create(data)

            res.json({
                meta:null,
                message:"Testimonal created successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    index = async(req,res,next)=>{
        try{
            const page= parseInt(req.query.page) || 1
            const limits = parseInt(req.query.limit) || 10
            const skip = (page-1)*limits

            const filter = {}
            if(req.query.search){
                filter.author = new RegExp(req.query.search, 'i')
            }
            const {count , data} = await TestimonalService.listALL({filter, skip, limits})

            res.json({
                result:data,
                message:"Testimonal list",
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
            this.testimonal = await TestimonalService.showById(id)
            if(!this.testimonal){
                throw {status:404, message:"Testimonal not found"}
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
                message:"Testimonal details",
                data:this.testimonal
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
            const response = await TestimonalService.update(id, data)
            res.json({
                meta:null,
                message:"Testimonal updated successfully",
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
            const response = await TestimonalService.delete(id)
            res.json({
                meta:null,
                message:"Testimonal deleted successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}
module.exports = new TestimonalController()