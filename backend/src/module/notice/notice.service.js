const { status } = require("../../config/constant.config")
const NoticeModel = require("./notice.model")

class NoticeService {

    create = async(data)=>{
        try{
            const response = await NoticeModel.create(data)
            return response.save()
            
        }catch(exception){
            throw exception
        }
    }
    listALL = async({filter={}, skip=0, limits=10})=>{
        try{
            const query = NoticeModel.find(filter)
                .limit(limits)
                .skip(skip)
                .sort({createdAt:-1})
                .lean()
            
            const [count, data] = await Promise.all([
                NoticeModel.countDocuments(filter),
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
            const response = await NoticeModel.findOne({ _id: id }).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    update = async(id, data)=>{
        try{
            const response = await NoticeModel.findOneAndUpdate({ _id: id }, data, {new:true}).lean()
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
    delete = async(id)=>{
        try{
            const response = await NoticeModel.findOneAndDelete({ _id: id }).lean()
            if(!response){
                throw {status:404, message:"Notice not found"}
            }
            return response
        }catch(exception){
            console.log(exception)
            throw exception
        }
    }
}
module.exports = new NoticeService()