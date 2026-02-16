const bannerService = require("./banner.service")

class BannerController  {
    banner;
    create = async(req,res,next)=>{
        try{
            const data = req.body

            const response = await bannerService.create(data)

            res.json({
                meta:null,
                message:"Banner created successfully",
                result:response
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
                filter.headline = new RegExp(req.query.search, 'i')
            }
            const [count , data] = await bannerService.listALL({filter, skip, limits})

            res.json({
                result:data,
                message:"Banner list",
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
            this.banner = await bannerService.showById(id)
            if(!this.banner){
                throw {status:404, message:"Banner not found"}
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
                message:"Banner details",
                data:this.banner
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
            const response = await bannerService.update(id, data)
            res.json({
                meta:null,
                message:"Banner updated successfully",
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
            const response = await bannerService.delete(id)
            res.json({
                meta:null,
                message:"Banner deleted successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    listForHome = async(req,res,next)=>{
        try{
            const response = await bannerService.listForHome()
            res.json({
                meta:null,
                message:"Banner list for home",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}
module.exports = new BannerController()