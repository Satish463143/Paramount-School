const noticeService = require("./notice.service")

class NoticeController  {
    notice;
    create = async(req,res,next)=>{
        try{
            const data = req.body

            const response = await noticeService.create(data)

            res.json({
                meta:null,
                message:"Notice created successfully",
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
            const {count , data} = await noticeService.listALL({filter, skip, limits})

            res.json({
                result:data,
                message:"Notice list",
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
            this.notice = await noticeService.showById(id)
            if(!this.notice){
                throw {status:404, message:" Notice not found"}
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
                message:"Notice details",
                data:this.notice
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
            const response = await noticeService.update(id, data)
            res.json({
                meta:null,
                message:"Notice updated successfully",
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
            const response = await noticeService.delete(id)
            res.json({
                meta:null,
                message:"Notice deleted successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}
module.exports = new NoticeController()