const TeamModel = require("./team.model")

class TeamService {

    create = async(data)=>{
        try{
            const response = await TeamModel.create(data)
            return response.save()
            
        }catch(exception){
            throw exception
        }
    }
    listALL = async({filter={}, skip=0, limits=10})=>{
        try{
            const query = TeamModel.find(filter)
                .limit(limits)
                .skip(skip)
                .sort({createdAt:-1})
                .lean()
            
            const [count, data] = await Promise.all([
                TeamModel.countDocuments(filter),
                query
            ])
            return {count, data}
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    showById = async(id)=>{
        try{
            const response = await TeamModel.findOne({ _id: id }).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    update = async(id, data)=>{
        try{
            const response = await TeamModel.findOneAndUpdate({ _id: id }, data, {new:true}).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    delete = async(id)=>{
        try{
            const response = await TeamModel.findOneAndDelete({ _id: id }).lean()
            if(!response){
                throw {status:404, message:"Team not found"}
            }
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
}
module.exports = new TeamService()