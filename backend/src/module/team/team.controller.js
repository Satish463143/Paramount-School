const TeamService = require("./team.service")

class TeamController  {
    team;
    create = async(req,res,next)=>{
        try{
            const data = req.body

            const response = await TeamService.create(data)

            res.json({
                meta:null,
                message:"Team created successfully",
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
                filter.name = new RegExp(req.query.search, 'i')
            }
            const {count , data} = await TeamService.listALL({filter, skip, limits})

            res.json({
                result:data,
                message:"Team list",
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
            this.team = await TeamService.showById(id)
            if(!this.team){
                throw {status:404, message:"Team not found"}
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
                message:"Team details",
                data:this.team
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
            const response = await TeamService.update(id, data)
            res.json({
                meta:null,
                message:"Team updated successfully",
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
            const response = await TeamService.delete(id)
            res.json({
                meta:null,
                message:"Team deleted successfully",
                data:response
            })

        }catch(exception){
            console.log(exception)
            next(exception)
        }
    }
}
module.exports = new TeamController()