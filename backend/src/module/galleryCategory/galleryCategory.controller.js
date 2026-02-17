const galleryCategoryService = require("./galleryCategory.service")

class GalleryCategoryController  {
    galleryCategory;
    create = async(req,res,next)=>{
        try{
            const data = req.body

            const response = await galleryCategoryService.create(data)

            res.json({
                meta:null,
                message:"Gallery Category created successfully",
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
                filter.title = new RegExp(req.query.search, 'i')
            }
            const {count , data} = await galleryCategoryService.listALL({filter, skip, limits})

            res.json({
                result:data,
                message:"Gallery Category list",
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
            this.galleryCategory = await galleryCategoryService.showById(id)
            if(!this.galleryCategory){
                throw {status:404, message:"Gallery Category not found"}
            }            

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
    delete = async(req,res,next)=>{
        try{
            const id = req.params.id
            await this.#validate(id)
            const response = await galleryCategoryService.delete(id)
            res.json({
                meta:null,
                message:"Gallery Category deleted successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}
module.exports = new GalleryCategoryController()